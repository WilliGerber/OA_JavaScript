import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Learn } from 'src/app/models/learn';
import { EventService } from 'src/app/services/event-service/event-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
  }
}
