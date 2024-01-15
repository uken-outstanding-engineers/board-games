import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GamesService } from '../api/game-service';
import { UserService } from '../api/user-service';
import { Table } from 'primeng/table';
import { CommentService } from '../api/comment-service';
import { Games } from '../api/game'; 
import { Category } from '../api/category';
import { CategoryService } from '../api/category-service';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class GameDetailsComponent implements OnInit {
  

  @ViewChild('dt') dt: Table | undefined;
  game: Games = {};
  userId = this.tokenStorageService.getUserDataFromStorage().id;
  categories: Category[] = [];
  showCommentList = true;
  showUsersPanel = true;
  showGalleria = true;
  currentView: string = '';

  constructor(
    private gamesService: GamesService,
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute,
    private CategoryService: CategoryService,
    private tokenStorageService: TokenStorageService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const gameId = params['id'];

      this.gamesService.getGames().subscribe((games: Games[]) => {
        const selectedGame = games.find(game => game.id === +gameId);

        if (selectedGame) {
          this.game = selectedGame;
        } else {
          console.error(`Game with id ${gameId} not found.`);
        }
      });
    });

    this.CategoryService.getCategories().subscribe(
      (data: Category[]) => {
          this.categories = data;
      },
      (error) => {
          console.error('Wystąpił błąd podczas pobierania kategorii!', error);
      }
    );
  }
  
  handleLike() {
    if (this.game && this.game.id !== undefined) {
      const userLikedKey = `liked_game_${this.game.id}`;
      const userLiked = sessionStorage.getItem(userLikedKey) === 'true'; 

      if (!userLiked) {
        this.game.likes = (this.game.likes || 0) + 1;
        sessionStorage.setItem(userLikedKey, 'true');
  
        this.gamesService.incrementLikes(this.game.id!).subscribe(
          () => {
            // Pomyślnie zaktualizowano grę
          },
          (error) => {
            console.error('Wystąpił błąd podczas aktualizacji gry!', error);
          }
        );
        this.userService.addLikedGame(this.game.id!, this.userId!).subscribe(
          () => {
            console.log("Dodano polubioną grę do bazy danych!")
          },
          (error) => {
            console.error('Wystąpił błąd podczas dodawania ulubionej gry!', error);
          }
        );
      } else {
        this.game.likes = Math.max(0, (this.game.likes || 0) - 1);
        sessionStorage.removeItem(userLikedKey);
  
        this.gamesService.decrementLikes(this.game.id!).subscribe(
          () => {
            // Pomyślnie zaktualizowano grę
          },
          (error) => {
            console.error('Wystąpił błąd podczas aktualizacji gry!', error);
          }
        );
        this.userService.deleteLikedGame(this.game.id!, this.userId!).subscribe(
          (date: any) => {
            // Pomyślnie usunięto grę
          },
          (error: any) => {
            console.error('Wystąpił błąd podczas usuwania!', error);
          }
        );
      }
    } else {
      console.error('Brak dostępu do identyfikatora gry.');
    }
  }
  applyFilterGlobal(event: any, stringVal: string) {
    this.dt!.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  showContent(view: string) {
    this.currentView = view;
  }

  getCategoryName(gametypeId: number): string {
    const category = this.categories.find(category => category.id === gametypeId);
    if (category && category.type) {
      return category.type;
    }
    return '';
  }
}