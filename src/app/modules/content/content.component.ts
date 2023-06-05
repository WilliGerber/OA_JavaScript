import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Learn } from 'src/app/models/learn';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  // @Input() selectedItem: Question | Learn;
  selectedQuestion: Question | null = null;

  isQuestionRoute: boolean = false;
  isLearningRoute: boolean = false;
  selectedItem: Question | Learn | undefined;

  handleItemSelected(item: Question | Learn) {
    this.selectedItem = item;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isQuestionRoute = event.url.includes('/conteudo/questoes');
      }
    });
  }
}
