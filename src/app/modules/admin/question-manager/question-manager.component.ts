import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/models/level';
import { Question } from 'src/app/models/question';
import { Subject } from 'src/app/models/subject';
import { ContentService } from 'src/app/services/content-service/content.service';
import { QuestionService } from 'src/app/services/question-service/question.service';
import { Observer } from 'rxjs';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-question-manager',
  templateUrl: './question-manager.component.html',
  styleUrls: ['./question-manager.component.scss']
})

export class QuestionManagerComponent implements OnInit {

  question: Question = {
    id_question: 0,
    title: '',
    tag: '',
    subject_id: '',
    level_id: '',
    isForm: false,
    question: ''
  };
  public formType: boolean = false;
  public levels: Level[] = [];
  public subjects: Subject[] = [];
  
  public Editor = ClassicEditor;
  public textoFormatado: string = '';

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
    this.contentService.getLevels().subscribe({
      next: (result) => {
        result.forEach((item) => {
          this.levels.push(item);
        });
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  getSubjects() {
    this.contentService.getSubjects().subscribe({
      next: (result) => {
        result.forEach((item) => {
          this.subjects.push(item);
        });
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
