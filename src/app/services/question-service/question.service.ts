import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Question } from 'src/app/models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:8000/api/questions'; // Atualize com a URL correta da sua API Laravel

  private questionSelectedSubject: Subject<Question> = new Subject<Question>();
  questionSelected$ = this.questionSelectedSubject.asObservable();

  constructor(private http: HttpClient) {}

  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.apiUrl, question);
  }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }

  getQuestion(questionId: number): Observable<Question> {
    return this.http.get<Question>(this.apiUrl + '/' + questionId);
  }

  getQuestionsBySubjectId(subjectId: number): Observable<Question[]> {
    const url = `${this.apiUrl}/filter/${subjectId}`;
    return this.http.get<Question[]>(url);
  }

  emitQuestionSelected(question: Question) {
    return this.questionSelectedSubject.next(question);
  }
}
