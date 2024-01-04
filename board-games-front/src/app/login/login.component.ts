import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';
import { AuthUserService } from '../api/auth-user-service'; 
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = ''; 

  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService,
    private authUserService : AuthUserService,
    private router: Router
  ) {}

  login(): void {
    this.authUserService.login(this.username, this.password).subscribe(
      (data: any) => {
        if (data !== null) {
          this.tokenStorageService.setToken('twój-token-jwt');
          this.tokenStorageService.saveUserDataInStorage(data);
          this.tokenStorageService.setLoggedIn(true);
          console.log('Zalogowano pomyślnie!', data);
          this.router.navigate(['/']);
        } else {
          console.log('Błąd logowania. Niepoprawna nazwa użytkownika lub hasło.');
          this.tokenStorageService.setLoggedIn(false);
        }
      },
      (error) => {
        console.log('Błąd logowania. Niepoprawna nazwa użytkownika lub hasło.', error);
        this.tokenStorageService.setLoggedIn(false); 
      }
    );
  }  
}
