import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private API_URL = 'http://localhost:8080/api/game';

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get(`${this.API_URL}/all`);
  }

  addGame(newGame: any): Observable<any> {
    return this.http.post(`${this.API_URL}/add`, newGame);
  }

  deleteGame(gameId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/delete/${gameId}`);
  }

  updateGame(updatedGame: any): Observable<any> {
    return this.http.put(`${this.API_URL}/edit/${updatedGame.id}`, updatedGame);
  }
}
