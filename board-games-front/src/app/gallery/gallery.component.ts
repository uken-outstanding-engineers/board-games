import { Component } from '@angular/core';
import { Games } from '../api/game';
import { GamesService } from '../api/game-service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  games: Games[] = []; 
  modalOpened = false;
  selectedGame: Games | null = null;
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

  openModal(game: Games) {
    this.selectedGame = game;
    this.modalOpened = true;
  }

  closeModal() {
    this.modalOpened = false;
    this.selectedGame = null;
  }
  
  getImagePath(game: Games): string {
    return `assets/images/${game.img}`;
  }
}
