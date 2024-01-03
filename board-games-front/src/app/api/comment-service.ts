// comment.service.ts
import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private API_URL = 'http://localhost:8080/api/comment';

  constructor(private http: HttpClient) {}

  getComments(): Observable<any> {
    return this.http.get(`${this.API_URL}/all`);
  }
}