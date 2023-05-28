import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeEditorComponent } from './modules/code-editor/code-editor.component';
import { SigninComponent } from './core/auth/signin/signin.component';
import { LayoutComponent } from './core/layout/layout.component';


const routes: Routes = [
  // {
  //   path: '',
  //   component: SigninComponent
  // },
  { 
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'code-editor', 
        component: CodeEditorComponent
      }
    ]
  },
  {
    path: 'login',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
