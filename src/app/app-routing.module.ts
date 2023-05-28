import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeEditorComponent } from './modules/code-editor/code-editor.component';
import { SigninComponent } from './core/auth/signin/signin.component';


const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  { 
    path: 'code-editor', 
    component: CodeEditorComponent 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
