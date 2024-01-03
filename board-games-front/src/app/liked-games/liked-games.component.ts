import { Component, OnInit } from '@angular/core';
import { Games } from '../api/game';
import { GamesService } from '../api/game-service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-liked-games',
  templateUrl: './liked-games.component.html',
  styleUrls: ['./liked-games.component.scss']
})
export class LikedGamesComponent implements OnInit {
  games: Games[] = []; 

  game!: Games; 

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.gamesService.getGames().subscribe(
      (data: Games[]) => {
        this.games = data;
      },
      (error) => {
        console.error('Wystąpił błąd podczas pobierania gier planszowych!', error);
      }
    );
  }
}
