import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeEditorComponent } from './modules/question/code-editor/code-editor.component';
import { SigninComponent } from './core/auth/signin/signin.component';
import { LayoutComponent } from './core/layout/layout.component';
import { QuestionComponent } from './modules/question/question.component';
import { ContentComponent } from './modules/content/content.component';
import { LearningComponent } from './modules/learning/learning.component';
import { AdminComponent } from './modules/admin/admin.component';
import { QuestionManagerComponent } from './modules/admin/question-manager/question-manager.component';
import { SignupComponent } from './modules/signup/signup.component';


const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'login',
    component: SigninComponent
  },
  {
    path: 'cadastre-se',
    component: SignupComponent
  },
  { 
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'conteudo',
        component: ContentComponent,
        children: [
          {
            path: 'questoes', 
            component: QuestionComponent
          },
          {
            path: 'aprendizado', 
            component: LearningComponent
          }
        ]
      },
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          {
            path: 'cadastro-questoes',
            component: QuestionManagerComponent
          }
        ]
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
