import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  isQuestionRoute: boolean = false;
  isLearningRoute: boolean = false;

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
