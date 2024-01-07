import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LikedGame } from './liked-game';

@Injectable({
  providedIn: 'root'
})
export class LikedGameService {
    private API_URL = 'http://localhost:8080/api/liked';

    constructor(private http: HttpClient) { }

    getLikedGamesForUser(userId: number): Observable<any> {
        return this.http.get(`${this.API_URL}/user/${userId}/likedGame`); 
    }
}