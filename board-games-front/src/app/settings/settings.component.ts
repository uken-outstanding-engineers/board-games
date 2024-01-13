import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TokenStorageService } from '../token-storage.service';
import { UserService } from '../api/user-service';
import { Router } from '@angular/router';

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
  check2: boolean | undefined;
  
  constructor(
    private tokenStorageService: TokenStorageService, 
    private messageService: MessageService, 
    private userService: UserService,
    private confirmationService: ConfirmationService,
    private router: Router
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
      //console.log(this.user.username);
      this.user.email = this.email;
      this.user.description = this.description;
      this.userService.updateUser(this.user).subscribe(
        (data: any) => {
          this.tokenStorageService.saveUserDataInStorage(data);
        },
        (error: any) => {
          console.error('Błąd podczas aktualizowania użytkownika:', error);
        }
      );
      //window.location.reload(); // Zmienić na coś innego
    }
  }

  onVerifyPassword(): void {
    this.userService.verifyUserPassword(this.user.id, this.currentPassword).subscribe(
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
      this.userService.changeUserPassword(this.user.id, this.newPassword).subscribe(
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

  deleteUser(userId: number) {
    this.confirmationService.confirm({
      message: 'Czy na pewno chcesz usunąć konto?', 
      header: 'Potwierdź',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Tak',
      rejectLabel: 'Nie',
      accept: () => {
        this.userService.deleteUser(userId).subscribe(
          () => {
            console.log('User deleted successfully.');
            this.tokenStorageService.removeToken(); 
            this.tokenStorageService.setLoggedIn(false);
            this.router.navigate(['/']);
          },
          (error: any) => {
            console.error('Error deleting user:', error);
          }
        );
      }
    });
  }
}
