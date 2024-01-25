import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = 'http://localhost:8080/api/category';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get(`${this.API_URL}/all`);
  }

  addCategory(newCategory: any): Observable<any> {
    return this.http.post(`${this.API_URL}/add`, newCategory);
  }

  deleteCategory(categoryId: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/delete/${categoryId}`);
  }
  
  updateCategory(updatedCategory: any): Observable<any> {
    return this.http.put(`${this.API_URL}/edit/${updatedCategory.id}`, updatedCategory);
  }
}
