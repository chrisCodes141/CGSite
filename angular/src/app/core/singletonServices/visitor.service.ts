import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  private apiUrl = 'http://localhost:8080/visitor';

  constructor(private http: HttpClient) { }

  getVisitorMessage(): Observable<{ message: string}> {
    return this.http.get<{ message: string }>(this.apiUrl);
  }
}
