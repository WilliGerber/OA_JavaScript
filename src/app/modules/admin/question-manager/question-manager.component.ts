import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { Question } from 'src/app/models/question';
import { Subject } from 'src/app/models/subject';
import { ContentService } from 'src/app/services/content-service/content.service';
import { QuestionService } from 'src/app/services/question-service/question.service';
@Component({
  selector: 'app-question-manager',
  templateUrl: './question-manager.component.html',
  styleUrls: ['./question-manager.component.scss']
})

export class QuestionManagerComponent implements OnInit {
  
  question: Question = {
    id: 0,
    title: '',
    tag: '',
    level: '',
    subject: '',
    formType: false,
    header: ''
  };
  formType: boolean = false;
  levels: Level[] = [];
  subjects: Subject[] = [];

  constructor(
    private questionService: QuestionService,
    private contentService: ContentService
    ) {}

  ngOnInit() {
    this.getLevels();
    this.getSubjects();
  }

  toggleChecked(): void {
    this.formType = !this.formType;
  }

  saveQuestion(): void {
    this.questionService.createQuestion(this.question)
      .subscribe(question => {
        console.log('Question created:', question);
        // Limpar o formulário ou redirecionar para outra página, se necessário
      });
  }

  getLevels() {
    this.contentService.getLevels().subscribe(
      (levels) => {
        // this.levels = levels;
        console.log(levels); // Faça o que for necessário com os níveis retornados
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getSubjects() {
    this.contentService.getSubjects().subscribe(
      // (subjects: Subject[]) => {
      //   this.subjects = subjects;
      //   console.log(this.subjects); // Faça o que for necessário com os níveis retornados
      // },
      // (error: any) => {
      //   console.error(error);
      // }
    );
  }
}
