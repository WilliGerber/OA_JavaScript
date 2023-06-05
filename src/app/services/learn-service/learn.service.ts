import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Learn } from 'src/app/models/learn';


@Injectable({
  providedIn: 'root'
})
export class LearnService {

  private apiUrl = 'http://localhost:8000/api/'; // Atualize com a URL correta da sua API Laravel

  private learnSelectedSubject: Subject<Learn> = new Subject<Learn>();
  itemSelected$ = this.learnSelectedSubject.asObservable();

  constructor(private http: HttpClient) {}
  //Levels
  getLearn(): Observable<Learn[]> {
    return this.http.get<Learn[]>(this.apiUrl + "learn");
  }
}
