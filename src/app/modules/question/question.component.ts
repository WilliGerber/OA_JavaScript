import { Component, OnInit } from '@angular/core';
import { Alternative, Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question-service/question.service';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event-service/event-service.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public typeForm: boolean = false;
  public question: Question = {
    id_question: 0,
    title: '',
    tag: '',
    subject_id: '',
    level_id: '',
    isForm: true,
    question: ''
  };
  public questionId: number = 0;

  constructor(
    private questionService: QuestionService,
    private eventService: EventService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this.eventService.eventQuestionSelected.subscribe((question: Question) => {
      this.question = question
    });
    this.eventService.eventSubjectSelected.subscribe((question: Question) => {
      this.question = question;
      // this.getQuestionAlternatives(question.id_question);
    });

    this.route.params.subscribe(params => {
      if(params['id']) {
        console.log(this.questionId = params['id']);
      }
    });

    // if(this.question.id_question == 0) {
    //   this.getQuestionAlternatives(1);
    // }
  }

  public checkAnswer(alternative: Alternative): void {
    this.question.alternatives?.forEach(a => {
      if (a === alternative) {
        a.selected = true;
        a.correct = a.isCorrect;
      } else {
        a.selected = false;
        if (a.isCorrect) {
          a.correct = true;
        }
      }
    });
  }

  public getQuestion(questionId: number) {
    this.questionService.getQuestion(questionId)
      .subscribe(result => {
        this.question = result;
      });
  }

  public getQuestionAlternatives(questionId: number) {
    this.questionService.getQuestionAlternatives(questionId)
      .subscribe(result => {
        this.question = result;
      });
  }

  // getQuestionsBySubjectId

  // public getQuestionsBySubjectId(questionId: number) {
  //   this.questionService.getQuestionsBySubjectId(questionId)
  //     .subscribe(result => {
  //       this.questions = result;
  //     });
  // }
}
