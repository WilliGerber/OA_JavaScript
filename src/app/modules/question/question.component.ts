import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
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

    this.route.params.subscribe(params => {
      if(params['id']) {
        this.questionId = params['id'];
      }
    });

    if(this.question.id_question == 0) {
      this.getQuestion(1);
    }
  }

  public getQuestion(questionId: number) {
    this.questionService.getQuestion(questionId)
      .subscribe(result => {
        this.question = result;
      });
  }
}
