import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Learn } from 'src/app/models/learn';


@Injectable({
  providedIn: 'root'
})
export class LearnService {

  private apiUrl = 'http://localhost:8000/api/'; // Atualize com a URL correta da sua API Laravel

  constructor(private http: HttpClient) {}
  //Levels
  getLearn(): Observable<Learn[]> {
    return this.http.get<Learn[]>(this.apiUrl + "learn");
  }
}
