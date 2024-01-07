import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
    private API_URL = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/login`, { username, password });
  }

  getUser(userId: number): Observable<any> {
    return this.http.get(`${this.API_URL}/user/${userId}`);
  }

  updateUser(updateUser: any): Observable<any> {
    return this.http.put(`${this.API_URL}/update/${updateUser.id}`, updateUser);
  }

  verifyUserPassword(userId: number, currentPassword: string) {
    return this.http.post(`${this.API_URL}/verifyPassword/${userId}`, currentPassword);
  }

  changeUserPassword(userId: number, newPassword: string) {
    return this.http.post(`${this.API_URL}/changePassword/${userId}`, newPassword);
  }
}
