import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TokenStorageService } from '../token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[] = [];
  isLoggedIn: boolean = false;
  username: string = 'login';

  constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit() {
    this.tokenStorageService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
      //if (this.isLoggedIn) {
        //this.username = this.tokenStorageService.getUsername() || '';
      //}
      this.updateMenuItems();
    });
  }

  private updateMenuItems(): void {
    if (this.isLoggedIn) {
      this.menuItems = [
        {
          label: this.username,
          items: [
            {
              label: 'Ustawienia',
              routerLink: '/settings',
            },
            {
              label: 'Wyloguj',
              command: () => this.logout(),
            },
          ],
        },
      ];
    } else {
      this.menuItems = [
        {
          label: 'Logowanie/Rejestracja',
          items: [
            {
              label: 'Logowanie',
              routerLink: '/login',
            },
            {
              label: 'Rejestracja',
              routerLink: '/register',
            },
          ],
        },
      ];
    }
  }

  logout(): void {
    this.tokenStorageService.removeToken(); 
    this.tokenStorageService.setLoggedIn(false);
    this.updateMenuItems(); 
  }
}
