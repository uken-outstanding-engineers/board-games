import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
//import { Games } from './games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private API_URL = 'http://localhost:8080/api/game';
  //private gamesUrl = 'all'; 

  constructor(private http: HttpClient) { }
  
  // getGames(): Observable<Games[]> {
  //   return of(GAMES_DATA); 
  //}

  getGames(): Observable<any> {
    return this.http.get(`${this.API_URL}/all`);
  }

  addGame(newGame: any): Observable<any> {
    return this.http.post(`${this.API_URL}/add`, newGame);
  }
}
