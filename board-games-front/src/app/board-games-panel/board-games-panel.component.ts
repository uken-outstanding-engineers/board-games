import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Games } from './game'; 
import { GamesService } from './game-service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-board-games-panel',
  templateUrl: './board-games-panel.component.html',
  styleUrls: ['./board-games-panel.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class BoardGamesPanelComponent implements OnInit{

    @ViewChild('dt') dt: Table | undefined;

    gameDialog: boolean = false; 

    games: Games[] = []; 

    game!: Games; 

    selectedGames!: Games[] | null; 

    submitted: boolean = false;

    constructor(private GamesService: GamesService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

    ngOnInit() {
        this.GamesService.getGames().subscribe(
          (data: Games[]) => {
            this.games = data;
          },
          (error) => {
            console.error('Wystąpił błąd podczas pobierania danych!', error);
          }
        );
      }
      

    applyFilterGlobal(event:any, stringVal:string) {
        this.dt!.filterGlobal((event.target as HTMLInputElement).value, stringVal);
    }

    openNew() {
        this.game = {}; 
        this.submitted = false;
        this.gameDialog = true; 
    }

    deleteSelectedGames() {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete the selected games?', 
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.games = this.games.filter((val) => !this.selectedGames?.includes(val)); 
                this.selectedGames = null; 
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Games Deleted', life: 3000 }); 
            }
        });
    }

    editGame(game: Games) {
        this.game = { ...game }; 
        this.gameDialog = true; 
    }

    deleteGame(game: Games) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + game.title + '?', 
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.games = this.games.filter((val) => val.id !== game.id); 
                this.game = {}; 
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Game Deleted', life: 3000 }); 
            }
        });
    }

    hideDialog() {
        this.gameDialog = false; 
        this.submitted = false;
    }

    saveGame() {
        this.submitted = true;

        if (this.game.title?.trim()) {
            if (this.game.id) {
                this.games[this.findIndexById(this.game.id)] = this.game; 
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Game Updated', life: 3000 }); 
            } else {
                this.game.id = null; 
                this.game.img = 'product-placeholder.svg'; 
                
                this.game.gametype1 = 1;
                this.game.gametype2 = 1;
                this.game.gametype3 = 1;
                this.game.published = 2020;
                this.game.max_players = 13;
                this.game.age = 10; 
                this.game.likes = 0;    
                this.game.price = 0;
                this.game.reference = "sdasad";

                this.GamesService.addGame(this.game).subscribe(
                    (data: any) => {
                      console.log('Dodano nową grę:', data);
                      this.games.push(data);
                      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Game Created', life: 3000 });
                    },
                    (error) => {
                      console.error('Błąd podczas dodawania gry:', error);
                      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add game', life: 3000 });
                    }
                  );
            }

            this.games = [...this.games]; 
            this.gameDialog = false; 
            this.game = {}; 
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.games.length; i++) { 
            if (this.games[i].id === id) { 
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}
