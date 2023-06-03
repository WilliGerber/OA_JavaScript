import { Component } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question-manager',
  templateUrl: './question-manager.component.html',
  styleUrls: ['./question-manager.component.scss']
})
export class QuestionManagerComponent {
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

  toggleChecked(): void {
    this.formType = !this.formType;
  }
}
