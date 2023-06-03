import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from 'src/app/models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:8000/api/questions'; // Atualize com a URL correta da sua API Laravel

  constructor(private http: HttpClient) {}

  createQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.apiUrl, question);
  }
}
