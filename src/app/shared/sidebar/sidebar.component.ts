import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  constructor(
    private dataService: DataService
  ) { }

  getDataFromServer(): void {
    // Faça a requisição para obter os dados do sidebar
  
    // Após obter os dados, armazene-os no DataService
    // this.dataService.setSidebarData(dadosObtidos);
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