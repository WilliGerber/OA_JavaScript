import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Learn } from 'src/app/models/learn';
import { Subject } from 'src/app/models/subject';
import { ContentService } from 'src/app/services/content-service/content.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  public subjects: Subject[] = [];
  public content: Learn | null = null;
  public showContinueReading = false;
  public levelId: number | undefined;
  public subjectParam: string | null | undefined;
  public subject: Subject | undefined;
  public subjectId: any;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    this.contentService.getSubjects().subscribe({
      next: (result) => {
        this.subjects = result
        this.loadContent();
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  loadContent() {
    this.levelId = 1; // Defina o level_id correto para o conteúdo de introdução
    this.subjectParam = this.route.snapshot.paramMap.get('subject');
    if (this.subjectParam) {
      this.subject = this.subjects.find(s => s.description.toLowerCase() === this.subjectParam?.toLowerCase());
      if (this.subject) {
        this.subjectId = this.subject.id_subject;
        this.contentService.getContentByLevelAndSubject(this.levelId, this.subjectId).subscribe(
          (content: Learn[]) => {
            if (content.length > 0) {
              this.content = content[0];
              // this.checkTextHeight();
            }
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
  }
}


