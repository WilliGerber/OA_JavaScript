import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeEditorComponent } from './modules/code-editor/code-editor.component';


const routes: Routes = [
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
