import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { Learn } from 'src/app/models/learn';
import { Subject } from 'src/app/models/subject';
import { ContentService } from 'src/app/services/content-service/content.service';
import { LearnService } from 'src/app/services/learn-service/learn.service';

@Component({
  selector: 'app-learn-manager',
  templateUrl: './learn-manager.component.html',
  styleUrls: ['./learn-manager.component.scss']
})
export class LearnManagerComponent implements OnInit {
  learn: Learn = {
    id_learn: 0,
    title: '',
    tag: '',
    level_id: 0,
    subject_id: 0,
    text: ''
  };
  public formType: boolean = false;
  public levels: Level[] = [];
  public subjects: Subject[] = [];

  constructor(
    private learnService: LearnService,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    this.getLevels();
    this.getSubjects();
  }

  toggleChecked(): void {
    this.formType = !this.formType;
  }

  saveLearn(): void {
    // this.learnService.createLearn(this.learn).subscribe(learn => {
    //   console.log('Learn created:', learn);
    //   // Limpar o formulário ou redirecionar para outra página, se necessário
    // });
  }

  getLevels() {
    this.contentService.getLevels().subscribe({
      next: (result) => {
        this.levels = result;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getSubjects() {
    this.contentService.getSubjects().subscribe({
      next: (result) => {
        this.subjects = result;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
