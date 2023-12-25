import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private accessTokenKey = 'accessToken';
  //private usernameKey = 'username'; // Klucz dla nazwy użytkownika
  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  setToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
    this.isLoggedInSubject.next(true);
  }

  getToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  //setUsername(username: string): void {
    //localStorage.setItem(this.usernameKey, username); // Zapisuje nazwę użytkownika
  //}

  //getUsername(): string | null {
    //return localStorage.getItem(this.usernameKey); // Pobiera nazwę użytkownika
  //}

  removeToken(): void {
    localStorage.removeItem(this.accessTokenKey);
    //localStorage.removeItem(this.usernameKey); 
    this.isLoggedInSubject.next(false);
  }

  setLoggedIn(value: boolean): void {
    this.isLoggedInSubject.next(value);
  }
}
