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


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

  @Input() expandMenu: boolean = true;
  @Output() itemSelected: EventEmitter<Question | Learn> = new EventEmitter<Question | Learn>();

  public questions: Question[] = [];
  public navRoutes: any;
  public isAdmin: boolean = false;
  public subjects: Subject[] = [];
  public selectedSubject: number = 0;
  public selectedComponent: number = -1;
  public questionComponent: boolean = false;
  public learnComponent: boolean = false;
  public urlQuestions: string  = '' ;
  public urlLearn: string  = '' ;

  constructor(
    private questionService: QuestionService,
    private contentService: ContentService,
    private learnService: LearnService,
    private route: ActivatedRoute,
    private router: Router
    ) {}



  ngOnInit() {
    this.initialize(this.route);
  }

  initialize(route: any) {
    console.log(route)
    this.getSubjects();
    if (route.component == AdminComponent) {
      this.urlQuestions = '/admin/cadastro-questoes';
      this.urlLearn = '/admin/cadastro-conteudo';
      this.isAdmin = true;
    }
    // else if (route.component == ContentComponent) {
    //   if (route.children[0].component == QuestionComponent) {
    //     this.getQuestions();
    //   } else if (route.component == LearningComponent) {
    //     this.getLearnContent();
    //   }
    // }
  }

  selectComponent(option: number){
    this.selectedComponent = option;
    if (this.selectedSubject > 0) {
      this.gettersBySubjectId(this.selectedSubject)
    }
    this.navRoutes = null;
    if(this.isAdmin) {
      if (this.selectedComponent == 0) {
        this.learnComponent = true
        this.questionComponent = false
        this.router.navigate([this.urlLearn])
      } else if (this.selectedComponent == 1){
        this.questionComponent = true
        this.learnComponent = false
        this.router.navigate([this.urlQuestions])
      }
    }
  }
  getRoutes(subjectId: number) {
    this.selectedSubject = subjectId
    this.gettersBySubjectId(subjectId)
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

  selectNavRoute(item: Question | Learn) {
    this.itemSelected.emit(item);
  }
}
