import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  public typeForm: boolean = false;

  ngOnInit(): void {
      this.getQuestion();
  }

  public getQuestion() {

  }
}
