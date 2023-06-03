import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodeEditorComponent } from './modules/question/code-editor/code-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { SigninComponent } from './core/auth/signin/signin.component';
import { SignupComponent } from './modules/signup/signup.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatButtonModule } from '@angular/material/button'

import { HeaderComponent } from './core/header/header.component';
import { LayoutComponent } from './core/layout/layout.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { QuestionComponent } from './modules/question/question.component';
import { ContentComponent } from './modules/content/content.component';
import { LearningComponent } from './modules/learning/learning.component';
import { AdminComponent } from './modules/admin/admin.component';
import { QuestionManagerComponent } from './modules/admin/question-manager/question-manager.component';

import { QuestionService } from './services/question-service/question.service';
import { ContentService } from './services/content-service/content.service';

@NgModule({
  declarations: [
    AppComponent,
    CodeEditorComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    LayoutComponent,
    SidebarComponent,
    QuestionComponent,
    ContentComponent,
    LearningComponent,
    AdminComponent,
    QuestionManagerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    QuestionService,
    ContentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
