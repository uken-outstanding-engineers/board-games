import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Games } from '../api/game'; 
import { GamesService } from '../api/game-service';
import { Category } from '../api/category';
import { CategoryService } from '../api/category-service';

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

    categories: Category[] = [];

    selectedGames!: Games[] | null; 
    submitted: boolean = false;

    uploadedFile: File | undefined;

    constructor(private gamesService: GamesService, private categoryService: CategoryService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

    ngOnInit() {

        this.gamesService.getGames().subscribe(
          (data: Games[]) => {
            this.games = data;
          },
          (error) => {
            console.error('Wystąpił błąd podczas pobierania gier planszowych!', error);
          }
        );

        this.categoryService.getCategories().subscribe(
          (data: Category[]) => {
              this.categories = data;
          },
          (error) => {
              console.error('Wystąpił błąd podczas pobierania kategorii!', error);
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
        message: 'Czy na pewno chcesz usunąć wybrane gry?', 
        header: 'Potwierdź',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Tak',
        rejectLabel: 'Nie',
        accept: () => {
          if (this.selectedGames) {
            this.selectedGames.forEach(game => {
              if (game.id !== null && game.id !== undefined) {
                this.gamesService.deleteGame(game.id).subscribe(
                  () => {
                    this.games = this.games.filter((val) => val.id !== game.id); 
                    this.messageService.add({ severity: 'success', summary: 'Operacja zakończona sukcesem', detail: 'Gra została usunięta', life: 3000 }); 
                  },
                  (error: any) => {
                    console.error('Błąd podczas usuwania gier:', error);
                  }
                );
              }
            });
            this.selectedGames = null; 
          }
        }
      });
    }
    
    editGame(game: Games) {
        this.game = { ...game }; 
        this.gameDialog = true; 
    }

    deleteGame(game: Games) {
        const id = game.id ?? -1;
        
        this.confirmationService.confirm({
            message: 'Czy na pewno chcesz usunąć ' + game.title + '?', 
            header: 'Potwierdź',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Tak',
            rejectLabel: 'Nie',
            accept: () => {
                this.gamesService.deleteGame(id).subscribe(
                  () => {
                    this.games = this.games.filter((val) => val.id !== game.id);
                    this.game = {};
                    this.messageService.add({ severity: 'success', summary: 'Operacja zakończona sukcesem', detail: 'Gra została usunięta', life: 3000 });
                  },
                  (error: any) => {
                    console.error('Błąd podczas usuwania gry:', error);
                  }
                );
              }
        });
    }

    hideDialog() {
        this.gameDialog = false; 
        this.submitted = false;
    }

    saveGame() {
        this.submitted = true;

        if (this.game.title?.trim() && this.game.shortDescription?.trim() && this.game.longDescription?.trim() && this.game.published && this.game.maxPlayers && this.game.age) {
          if (this.game.id) { //edit game
            this.games[this.findIndexById(this.game.id)] = this.game; 
            console.log(this.game);
            this.gamesService.updateGame(this.game).subscribe(
              (updatedGameData: any) => {
                this.messageService.add({ severity: 'success', summary: 'Operacja zakończona sukcesem', detail: 'Gra została zaktualizowana', life: 3000 });
              },
              (error: any) => {
                console.error('Błąd podczas aktualizowania gry:', error);
                this.messageService.add({ severity: 'error',summary: 'Błąd', detail: 'Nie powiodło się zaktualizowanie gry', life: 3000 });
              }
            );
          }
           else { //add game
            this.game.likes = 0; 
            
            //this.game.img = 'p1.jpg'; 
            //this.game.gametype1 = 1;

            this.gamesService.addGame(this.game).subscribe(
                (data: any) => {
                  this.games.push(data);
                  this.games = this.games.slice();
                  this.uploadGameImageFile(data.id);
                  this.messageService.add({ severity: 'success', summary: 'Operacja zakończona sukcesem', detail: 'Gra została utworzona', life: 3000 });
                },
                (error) => {
                  console.error('Błąd podczas dodawania gry:', error);
                  this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie powiodło się dodanie gry', life: 3000 });
                }
              );
            }

            this.games = [...this.games]; 
            this.gameDialog = false; 
            this.game = {}; 
        }
    }

    getCategoryName(gametypeId: number): string {
      const category = this.categories.find(category => category.id === gametypeId);
      if (category && category.type) {
        return category.type;
      }
      return '';
    }
    
    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.games.length; i++) { 
            if (this.games[i].id === id) { 
                index = i;
                break;
            }
        }

        return index;
    }

    onGameImageFileChange(event: any): void {
      if (event.files && event.files.length > 0) {
        this.uploadedFile = event.files[0];
      }
    }
    

    uploadGameImageFile(gameId: number): void {
      if (this.uploadedFile) {
        const formData = new FormData();
        formData.append('file', this.uploadedFile);
  
        // Możesz przeprowadzić operacje na pliku tutaj
        console.log('Nazwa pliku:', this.uploadedFile.name);
        console.log('Typ pliku:', this.uploadedFile.type);
        console.log('Rozmiar pliku:', this.uploadedFile.size);
  
        this.gamesService.uploadGameImage(gameId, this.uploadedFile).subscribe(
          (data) => {
            console.log('Plik został przesłany na serwer.');
            // Dodatkowe operacje po pomyślnym przesłaniu pliku
          },
          (error) => {
            console.error('Błąd podczas przesyłania pliku:', error);
          }
        );
      }
    }

    onUpload(event: any) {
      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
    }
}
