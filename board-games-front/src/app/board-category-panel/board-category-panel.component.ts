import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../api/category';
import { CategoryService } from '../api/category-service';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-board-category-panel',
  templateUrl: './board-category-panel.component.html',
  styleUrls: ['./board-category-panel.component.scss']
})
export class BoardCategoryPanelComponent implements OnInit{

  @ViewChild('dt') dt: Table | undefined;

  categoryDialog: boolean = false; 

  categories: Category[] = [];

  category!: Category;

  selectedCategory!: Category[] | null; 

  submitted: boolean = false;

  constructor(private CategoryService: CategoryService, private messageService: MessageService, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.CategoryService.getCategories().subscribe(
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
    this.category = {}; 
    this.submitted = false;
    this.categoryDialog = true; 
  } 

  deleteSelectedCategories() {
    this.confirmationService.confirm({
      message: 'Czy na pewno chcesz usunąć wybrane kategorie?', 
      header: 'Zatwierdź',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Tak',
      rejectLabel: 'Nie',
      accept: () => {
        if (this.selectedCategory) {
          this.selectedCategory.forEach(category => {
            if (category.id !== null && category.id !== undefined) {
              this.CategoryService.deleteCategory(category.id).subscribe(
                () => {
                  this.categories = this.categories.filter((val) => val.id !== category.id); 
                  this.messageService.add({ severity: 'success', summary: 'Operacja zakończona sukcesem', detail: 'Kategorie zostały usunięte', life: 3000 }); 
                },
                (error: any) => {
                  console.error('Błąd podczas usuwania kategorii:', error);
                }
              );
            }
          });
          this.selectedCategory = null; 
        }
      }
    });
  }

  editCategory(category: Category) {
    this.category = { ...category }; 
    this.categoryDialog = true; 
  }

  deleteCategory(category: Category) {
    const id = category.id ?? -1;
        
        this.confirmationService.confirm({
            message: 'Czy na pewno chcesz usunąć ' + category.type + '?', 
            header: 'Zatwierdź',
            icon: 'pi pi-exclamation-triangle',
            acceptLabel: 'Tak',
            rejectLabel: 'Nie',
            accept: () => {
                this.CategoryService.deleteCategory(id).subscribe(
                  () => {
                    this.categories = this.categories.filter((val) => val.id !== category.id);
                    this.category = {};
                    this.messageService.add({ severity: 'success', summary: 'Operacja zakończona sukcesem', detail: 'Kategoria została usunięta', life: 3000 });
                  },
                  (error: any) => {
                    console.error('Błąd podczas usuwania kategori:', error);
                  }
                );
              }
        });
  }

  hideDialog() {
    this.categoryDialog = false; 
    this.submitted = false;
  }

  saveCategory() {
    this.submitted = true;

    if (this.category.type?.trim()) {
      if (this.category.id) {
        this.categories[this.findIndexById(this.category.id)] = this.category; 
        this.CategoryService.updateCategory(this.category).subscribe(
          (updatedCategoryData: any) => {
            this.messageService.add({ severity: 'success', summary: 'Operacja zakończona sukcesem', detail: 'Kategoria została zaktualizowana', life: 3000 });
          },
          (error: any) => {
            console.error('Błąd podczas aktualizowania kategori:', error);
            this.messageService.add({ severity: 'error',summary: 'Błąd', detail: 'Nie powiodło się zaktualizować kategori', life: 3000 });
          }
        );
      }
      else {
        if (this.categories.find(cat => cat.type === this.category.type)) {
          this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Kategoria już istnieje', life: 3000 });
        } else {
          this.CategoryService.addCategory(this.category).subscribe(
              (data: any) => {
                console.log('Dodano nową grę:', data);
                this.categories.push(data);
                this.categories = this.categories.slice();
                this.messageService.add({ severity: 'success', summary: 'Operacja zakończona sukcesem', detail: 'Kategoria została utworzona', life: 3000 });
              },
              (error) => {
                console.error('Błąd podczas dodawania gry:', error);
                this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie powiodło się dodanie kategorii', life: 3000 });
              }
            );
          }
        }

        this.categories = [...this.categories]; 
        this.categoryDialog = false; 
        this.category = {}; 
    }
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.categories.length; i++) { 
        if (this.categories[i].id === id) { 
            index = i;
            break;
        }
    }

    return index;
}
}
