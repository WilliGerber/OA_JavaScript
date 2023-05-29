import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  @Input() expandMenu: boolean = true;
  
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