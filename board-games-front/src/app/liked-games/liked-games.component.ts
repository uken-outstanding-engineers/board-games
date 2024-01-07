import { Component, OnInit } from '@angular/core';
import { LikedGame } from '../api/liked-game';
import { GamesService } from '../api/game-service';
import { AuthUserService } from '../api/auth-user-service';
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
    private authUserService: AuthUserService,
    private tokenStorageService: TokenStorageService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit() {
    this.authUserService.getUser(this.userId).subscribe(
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

  onMouseOver(button: any) {
    button.icon = 'pi pi-times';
  }
  
  onMouseOut(button: any) {
    button.icon = 'pi pi-heart';
  }

}
