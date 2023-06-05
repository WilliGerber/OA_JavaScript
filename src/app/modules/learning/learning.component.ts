import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LearnService } from 'src/app/services/learn-service/learn.service';
import { Learn } from 'src/app/models/learn';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent implements OnInit {
  learn: Learn | undefined;

  constructor(
    private route: ActivatedRoute,
    private learnService: LearnService
  ) { }

  ngOnInit() {
    this.learnService.itemSelected$.subscribe((learn: Learn) => {
      this.learn = learn;
    });
  }
}
