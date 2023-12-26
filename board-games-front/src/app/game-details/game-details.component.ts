import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Games } from '../board-games-panel//game'; 
import { GamesService } from '../board-games-panel/game-service';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class GameDetailsComponent implements OnInit {

  @ViewChild('dt') dt: Table | undefined;

  //gameDialog: boolean = false; 

  games: Games[] = []; 

  game!: Games; 

  //selectedGames!: Games[] | null; 

  //submitted: boolean = false;

  //currentView: string = '';

  constructor(
    private GamesService: GamesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute
  ) {}
    
  ngOnInit() {
    this.GamesService.getGames().subscribe(
      (data: Games[]) => {
        this.games = data;
        this.game = this.games[0];
      },
      (error) => {
        console.error('Wystąpił błąd podczas pobierania danych!', error);
      }
    );
  }
}