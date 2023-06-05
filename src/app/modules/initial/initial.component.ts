import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/subject';
import { ContentService } from 'src/app/services/content-service/content.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.scss']
})

export class InitialComponent implements OnInit {
  public subjects: Subject[] = [];

  constructor(
    private contentService: ContentService) {}

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    this.contentService.getSubjects().subscribe(
      (subjects: Subject[]) => {
        this.subjects = subjects;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
