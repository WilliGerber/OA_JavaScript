import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeEditorComponent } from './modules/code-editor/code-editor.component';

import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
