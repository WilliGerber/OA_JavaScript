import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Observable} from 'rxjs';
import { QuestionService } from 'src/app/services/question-service/question.service';
import { ContentService } from 'src/app/services/content-service/content.service';
import { LearnService } from 'src/app/services/learn-service/learn.service';
import { Question } from 'src/app/models/question';
import { Subject } from 'src/app/models/subject';
import { ActivatedRoute } from '@angular/router';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { Router } from '@angular/router';
import { Learn } from 'src/app/models/learn';
import { ContentComponent } from 'src/app/modules/content/content.component';
import { QuestionComponent } from 'src/app/modules/question/question.component';
import { LearningComponent } from 'src/app/modules/learning/learning.component';
import { EventService } from 'src/app/services/event-service/event-service.service';
import { MatSelectChange } from '@angular/material/select';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  @Input() expandMenu: boolean = true;
  @Output() questionSelected: EventEmitter<Question> = new EventEmitter<Question>();

  public questions: Question[] = [];
  public navRoutes: any;
  public isAdmin: boolean = false;
  public subjects: Subject[] = [];
  public selectedSubject!: Subject;
  public selectedComponent: number = -1;
  public questionComponent: boolean = false;
  public learnComponent: boolean = false;
  public urlQuestions: string  = '' ;
  public urlLearn: string  = '' ;

  constructor(
    private questionService: QuestionService,
    private contentService: ContentService,
    private learnService: LearnService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
    ) {}



  ngOnInit() {
    this.initialize(this.route);
  }

  initialize(route: any) {
    this.getSubjects();


    const subjectIdParam = this.route.snapshot.queryParamMap.get('subject_id');
    // this.selectedSubject = subjectIdParam ? parseInt(subjectIdParam, 10) : 0;

    if (route.component == AdminComponent) {
      this.urlQuestions = '/admin/cadastro-questoes';
      this.urlLearn = '/admin/cadastro-conteudo';
      this.isAdmin = true;
    }
    else if (route.component == ContentComponent) {
      this.urlQuestions = '/conteudo/questoes';
      this.urlLearn = '/conteudo/aprendizado';
      if (route.children[0].component == QuestionComponent) {
        this.selectedComponent = 1
      } else if (route.children[0].component == LearningComponent) {
        this.selectedComponent = 0
      }
    }
    if (this.route.snapshot.queryParamMap.get('subject_id') && this.selectedComponent >= 0) {
      this.gettersBySubjectId(this.selectedSubject.id_subject);
    }
  }

  selectComponent(option: number){
    console.log(this.selectedSubject)
    this.selectedComponent = option;
    if (this.selectedSubject.id_subject > 0) {
      this.gettersBySubjectId(this.selectedSubject.id_subject)
    }
    this.navRoutes = null;
    // if(this.isAdmin) {
      if (this.selectedComponent == 0) {
        this.learnComponent = true
        this.questionComponent = false
        this.router.navigate([this.urlLearn])
      } else if (this.selectedComponent == 1){
        this.questionComponent = true
        this.learnComponent = false
        this.router.navigate([this.urlQuestions])
      }
    // }
  }
  getRoutes(event: MatSelectChange) {
    const subject: Subject = event.value as Subject;
    console.log(subject)
    this.selectedSubject = subject
    console.log(this.selectedSubject)
    this.eventService.eventSubjectSelected.emit(subject);
    this.gettersBySubjectId(subject.id_subject)
  }

  gettersBySubjectId(subjectId: number) {
    if (this.selectedComponent == 0) {
      this.getLearnContentsBySubjectId(subjectId)

    } else if (this.selectedComponent == 1) {
      this.getQuestionsBySubjectId(subjectId)
    }
  }

  getLearnContentsBySubjectId(subjectId: number) {
    this.contentService.getLearnContentsBySubjectId(subjectId).subscribe((data: any[]) => {
      this.navRoutes = data;
    })
  }

  getQuestionsBySubjectId(subjectId: number) {
    this.questionService.getQuestionsBySubjectId(subjectId).subscribe((data: any[]) => {
      this.navRoutes = data;
    })
  }

  getSubjects() {
    this.contentService.getSubjects().subscribe({
      next: (result) => {
        result.forEach((item) => {
          this.subjects.push(item);
        });
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  selectNavRoute(item: any) {
    console.log(item)
    if(item.id_question) {
      this.eventService.eventQuestionSelected.emit(item);
    } else if (item.id_learn) {
      this.eventService.eventLearnSelected.emit(item);
    }
  }
}
