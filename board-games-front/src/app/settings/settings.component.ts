import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TokenStorageService } from '../token-storage.service';
import { AuthUserService } from '../api/user-service';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  user: any | null = null;

  description: string | null = null;
  username: string | null = null;
  email: string | null = null;

  currentPassword: string = "";
  newPassword: string = "";
  reNewPassword: string = "";

  check: boolean | undefined;
  
  constructor(
    private tokenStorageService: TokenStorageService, 
    private messageService: MessageService, 
    private authUserService: AuthUserService,
    private confirmationService: ConfirmationService,
    //private navbarComponent: NavbarComponent
    ) { }

  ngOnInit(): void {
    this.loadDataFromTokenStorage();
  }

  loadDataFromTokenStorage(): void {
    this.user = this.tokenStorageService.getUserDataFromStorage();
    if (this.user) {
      this.description = this.user.description;
      this.username = this.user.username;
      this.email = this.user.email;
    }
  }

  saveUserData(): void {
    if (this.user.id) {
      this.user.username = this.username;
      this.user.email = this.email;
      this.user.description = this.description;
      this.authUserService.updateUser(this.user).subscribe(
        (data: any) => {
          this.tokenStorageService.saveUserDataInStorage(data);
        },
        (error: any) => {
          console.error('Błąd podczas aktualizowania użytkownika:', error);
        }
      );
    }
  }

  onVerifyPassword(): void {
    this.authUserService.verifyUserPassword(this.user.id, this.currentPassword).subscribe(
      (data: any) => {
        console.log(data);
        if(data){
          console.log('Aktualne hasło jest poprawne!');
          this.onChangePassword();
        } 
        else {
          console.log("Aktualne hasło jest niepoprawne!")
          // Kod obsługujący niepoprawne hasło
        }
      },
      (error: any) => {
        console.error('Błąd podczas weryfikacji hasła:', error);
      }
    );
  }

  onChangePassword(): void {
    if(this.newPassword == this.reNewPassword) {
      console.log(this.newPassword);
      this.authUserService.changeUserPassword(this.user.id, this.newPassword).subscribe(
          (data: any) => {
            console.log('Hasło zmienione!', data);
            // Dodaj kod obsługujący poprawną zmianę hasła
          },
          (error: any) => {
            console.error('Błąd podczas zmiany hasła:', error);
            // Dodaj kod obsługujący błędy
          }
        );
    }
    else {
      console.log('Hasła się nie zgadzają!');
      // Dodaj kod obsługujący błędy
    }
  }
  
}
