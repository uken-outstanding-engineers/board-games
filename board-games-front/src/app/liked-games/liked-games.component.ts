import { Component, OnInit } from '@angular/core';
import { LikedGame } from '../api/liked-game';
import { GamesService } from '../api/game-service';
import { UserService } from '../api/user-service';
import { TokenStorageService } from '../token-storage.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-liked-games',
  templateUrl: './liked-games.component.html',
  styleUrls: ['./liked-games.component.scss']
})
export class LikedGamesComponent implements OnInit {
  userId = this.tokenStorageService.getUserDataFromStorage().id;
  likedGame: LikedGame[] = []; 
  
  isHovered = true;

  constructor(
    private gamesService: GamesService,
    private messageService: MessageService, 
    private userService: UserService,
    private tokenStorageService: TokenStorageService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit() {
    this.userService.getUser(this.userId).subscribe(
      (data: any) => {
        this.likedGame = data.likedGame;

        // Sortowanie likedGame po dacie
        this.likedGame.sort((a, b) => {
          if (a.date && b.date) {
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          }
          return 0;
        });

      },
      (error) => {
        console.error('Wystąpił błąd podczas pobierania gier planszowych!', error);
      }
    );
  }

  deleteSelectedLikedGame(gameId: number) {
    const userLikedKey = `liked_game_${gameId}`;
    sessionStorage.removeItem(userLikedKey);
    //sessionStorage.getItem(userLikedKey) === 'false'; 

    this.userService.deleteLikedGame(gameId, this.userId).subscribe(
      (date: any) => {
        this.likedGame = this.likedGame.filter(lg => lg.game.id !== gameId);
      },
      (error: any) => {
        console.error('Wystąpił błąd podczas usuwania!', error);
      }
    );
    this.gamesService.decrementLikes(gameId).subscribe(
      () => {
        // Pomyślnie zaktualizowano grę
      },
      (error) => {
        console.error('Wystąpił błąd podczas usuwania lika!', error);
      }
    );
  }

  onMouseOver(button: any) {
    button.icon = 'pi pi-times';
  }
  
  onMouseOut(button: any) {
    button.icon = 'pi pi-heart';
  }

}
