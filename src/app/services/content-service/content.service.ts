import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Level } from 'src/app/models/level';
import { Subject } from 'src/app/models/subject';

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
}
