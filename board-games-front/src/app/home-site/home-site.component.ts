import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Games } from '../api/game'; 
import { GamesService } from '../api/game-service';
import { Table } from 'primeng/table';
import { Category } from '../api/category';
import { CategoryService } from '../api/category-service';

@Component({
  selector: 'app-home-site',
  templateUrl: './home-site.component.html',
  styleUrls: ['./home-site.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class HomeSiteComponent implements OnInit{

    @ViewChild('dt') dt: Table | undefined;

    gameDialog: boolean = false; 

    games: Games[] = []; 

    game!: Games; 

    categories: Category[] = [];

    selectedGames!: Games[] | null; 

    submitted: boolean = false;

    constructor(private GamesService: GamesService, private CategoryService: CategoryService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

    ngOnInit() {

        this.GamesService.getGames().subscribe(
          (data: Games[]) => {
            this.games = data;
          },
          (error) => {
            console.error('Wystąpił błąd podczas pobierania danych!', error);
          }
        );

        this.CategoryService.getCategories().subscribe(
          (data: Category[]) => {
              this.categories = data;
          },
          (error) => {
              console.error('Wystąpił błąd podczas pobierania kategorii!', error);
          }
        );
    }
      
    getCategoryName(gametypeId: number): string {
      const category = this.categories.find(category => category.id === gametypeId);
      if (category && category.type) {
        return category.type;
      }
      return '';
    }

    applyFilterGlobal(event: Event, stringVal:string) {
        this.dt!.filterGlobal((event.target as HTMLInputElement).value, stringVal);
    }
}