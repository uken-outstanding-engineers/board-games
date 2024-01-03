import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GamesService } from '../api/game-service';
import { Table } from 'primeng/table';
import { CommentService } from '../api/comment-service';
import { Comment } from '../api/comment';
import { Games } from '../api/game'; 
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class GameDetailsComponent implements OnInit {

  @ViewChild('dt') dt: Table | undefined;
  game: Games = {}; // Initialize an empty game object

  currentView: string = '';

  constructor(
    private gamesService: GamesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute // Correct injection
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
  }
  
  
  applyFilterGlobal(event: any, stringVal: string) {
    this.dt!.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

  showContent(view: string) {
    this.currentView = view;
  }

  /*addComment(username: string, content: string): void {
    const newComment: Comment = {
      username,
      content,
      timestamp: new Date(),
    };

    this.commentService.addComment(newComment);
  }

  getComments(): Comment[] {
    return this.commentService.getComments();
  }*/
}