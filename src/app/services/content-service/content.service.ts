import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Level } from 'src/app/models/level';
import { Subject } from 'src/app/models/subject';
import { Learn } from 'src/app/models/learn';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = 'http://localhost:8000/api/'; // Atualize com a URL correta da sua API Laravel

  constructor(private http: HttpClient) {}
  //Levels
  getLevels(): Observable<Level[]> {
    return this.http.get<Level[]>(this.apiUrl + "level");
  }

  //Subjects
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.apiUrl + "subject");
  }

  getLearnContentsBySubjectId(subjectId: number): Observable<Learn[]> {
    const url = `${this.apiUrl}learn/filter/${subjectId}`;
    return this.http.get<Learn[]>(url);
  }

  getContentByLevelAndSubject(levelId: number, subjectId: number): Observable<Learn[]> {
    const url = `${this.apiUrl}learnByLevelAndSubject/${levelId}/${subjectId}`;
    return this.http.get<Learn[]>(url);
  }

  getAllLearnContents(): Observable<Learn[]> {
    return this.http.get<Learn[]>(this.apiUrl + 'learn');
  }

  getLearnContentById(learnId: number): Observable<Learn> {
    const url = `${this.apiUrl}learn/${learnId}`;
    return this.http.get<Learn>(url);
  }
}
