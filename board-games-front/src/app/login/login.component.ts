import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = ''; 

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router // Wstrzyknięcie usługi Router
  ) {}

  login(): void {
    if (this.username === 'login' && this.password === 'password') {
      console.log('Zalogowano pomyślnie!');
      this.tokenStorageService.setToken('twój-token-jwt');
      this.tokenStorageService.setLoggedIn(true);
      //this.tokenStorageService.setUsername(this.username);

      this.router.navigate(['/']);
    } else {
      console.log('Błąd logowania. Niepoprawna nazwa użytkownika lub hasło.');
    }
  }
}
