import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private accessTokenKey = 'accessToken';
  private userKey = 'userData';

  private isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  setToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
    this.isLoggedInSubject.next(true);
  }

  getToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.userKey); 
    this.isLoggedInSubject.next(false);
  }

  setLoggedIn(value: boolean): void {
    this.isLoggedInSubject.next(value);
  }

  saveUserDataInStorage(userData: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(userData));
  }

  getUserDataFromStorage(): any | null {
    const userData = localStorage.getItem(this.userKey);
    return userData ? JSON.parse(userData) : null;
  }
  
}
