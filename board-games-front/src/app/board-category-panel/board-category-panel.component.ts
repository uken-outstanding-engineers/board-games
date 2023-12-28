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
      message: 'Are you sure you want to delete the selected categories?', 
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        if (this.selectedCategory) {
          this.selectedCategory.forEach(category => {
            if (category.id !== null && category.id !== undefined) {
              this.CategoryService.deleteCategory(category.id).subscribe(
                () => {
                  this.categories = this.categories.filter((val) => val.id !== category.id); 
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Categories Deleted', life: 3000 }); 
                },
                (error: any) => {
                  console.error('Error deleting category:', error);
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
            message: 'Are you sure you want to delete ' + category.type + '?', 
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.CategoryService.deleteCategory(id).subscribe(
                  () => {
                    this.categories = this.categories.filter((val) => val.id !== category.id);
                    this.category = {};
                    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category Deleted', life: 3000 });
                  },
                  (error: any) => {
                    console.error('Error deleting category:', error);
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
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category Updated', life: 3000 });
          },
          (error: any) => {
            console.error('Error updating category:', error);
            this.messageService.add({ severity: 'error',summary: 'Error', detail: 'Failed to update category', life: 3000 });
          }
        );
        console.log("nie działa");
      }
      else {
            this.CategoryService.addCategory(this.category).subscribe(
                (data: any) => {
                  console.log('Dodano nową grę:', data);
                  this.categories.push(data);
                  this.categories = this.categories.slice();
                  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Category Created', life: 3000 });
                },
                (error) => {
                  console.error('Błąd podczas dodawania gry:', error);
                  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Failed to add category', life: 3000 });
                }
              );
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
