import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearnService } from 'src/app/services/learn-service/learn.service';
import { Learn } from 'src/app/models/learn';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event-service/event-service.service';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  learn: Learn = {
    id_learn: 0,
    title: '',
    tag: '',
    level_id: 0,
    subject_id: 0,
    text: ''
  };
  learnId: number = -1;
  learns: Learn[] = [];

  constructor(
    private route: ActivatedRoute,
    private learnService: LearnService,
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.eventService.eventLearnSelected.subscribe((learn: Learn) => {
      this.learn = learn
    });

    this.route.params.subscribe(params => {
      if(params['id']) {
        this.learnId = params['id'];
      }
    });

    if(this.learn.id_learn == 0) {
      this.getLearn(1);
    }
  }

  public getLearn(learnId: number) {
    this.learnService.getLearn(learnId)
      .subscribe(result => {
        this.learn = result;
      });
  }
}

