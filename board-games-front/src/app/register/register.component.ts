// register.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';
import { UserService } from '../api/user-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  newUsername: string = '';
  email: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private userService : UserService,
    private router: Router
  ) {}

  register(): void {
    const permission = 1;
    this.userService.register(this.newUsername,this.email, this.newPassword, permission).subscribe(
        (data: any) => {
          this.tokenStorageService.setToken('twój-token-jwt');
          this.tokenStorageService.saveUserDataInStorage(data);
          this.tokenStorageService.setLoggedIn(true);
            console.log('Rejestracja udana!', data);
            this.router.navigate(['/']);
        },
        (error) => {
            console.log('Błąd rejestracji.', error);
        }
    );
  }
}
