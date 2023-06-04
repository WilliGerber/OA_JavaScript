import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Observable } from 'rxjs';
import { QuestionService } from 'src/app/services/question-service/question.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  @Input() expandMenu: boolean = true;
  questions: any[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.questionService.getQuestions().subscribe((data: any[]) => {
      console.log(data);
      this.questions = data;
    });
  }

}


// import { Component, OnInit } from '@angular/core';
// import { QuestionService } from 'caminho/para/o/servico/question.service';

// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.scss']
// })
// export class SidebarComponent implements OnInit {
//   questions: any[] = [];

//   constructor(private questionService: QuestionService) {}

//   ngOnInit(): void {
//     this.loadQuestions();
//   }

//   loadQuestions(): void {
//     this.questionService.getQuestions().subscribe((data: any[]) => {
//       this.questions = data;
//     });
//   }
// }
