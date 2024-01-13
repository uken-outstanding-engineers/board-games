import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.API_URL}/all`);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, { username, password });
  }

  register(newUsername: string, newEmail: string, newPassword: string, permission: number): Observable<any> {
    const newUser = { username: newUsername, passwd: newPassword, permission: permission, email: newEmail };
    return this.http.post<any>(`${this.API_URL}/register`, newUser);
  }

  getUser(userId: number): Observable<any> {
    return this.http.get(`${this.API_URL}/user/${userId}`);
  }

  updateUser(updateUser: any): Observable<any> {
    return this.http.put(`${this.API_URL}/update/${updateUser.id}`, updateUser);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/delete/${id}`);
  }

  verifyUserPassword(userId: number, currentPassword: string) {
    return this.http.post(`${this.API_URL}/verifyPassword/${userId}`, currentPassword);
  }

  changeUserPassword(userId: number, newPassword: string) {
    return this.http.post(`${this.API_URL}/changePassword/${userId}`, newPassword);
  }

  deleteLikedGame(gameId: number, userId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/deleteLikedGames/${userId}/${gameId}`);
  }

  addLikedGame(gameId: number, userId: number): Observable<any> {
    const likedGame = { userId, gameId };
    return this.http.post<any>(`${this.API_URL}/addLikedGame`, likedGame);
  }
}
