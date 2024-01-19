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
  private userId: number | null = null;

  constructor(private http: HttpClient) {}

  setUserId(userId: number | null): void {
    this.userId = userId;
  }

  getComments(gameId: number): Observable<any> {
    return this.http.get(`${this.API_URL}/game/${gameId}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    //if (this.userId !== null) {
      //comment.idUsers = this.userId;
    //}
    console.log("2", comment);
    return this.http.post<Comment>(`${this.API_URL}/add`, comment);
  }
}