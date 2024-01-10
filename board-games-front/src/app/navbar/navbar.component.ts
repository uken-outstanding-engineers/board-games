import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TokenStorageService } from '../token-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  menuItems: MenuItem[] = [];
  isLoggedIn: boolean = false;
  username!: string;
  permission: number = 0;

  constructor(
    private tokenStorageService: TokenStorageService,
    private router: Router,
    private commonModule: CommonModule
    ) {}

  ngOnInit() {
    this.tokenStorageService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = !!this.tokenStorageService.getToken();        
      this.updateMenuItems();
    });
  }

  private updateMenuItems(): void {
    if (this.isLoggedIn) {
      this.updateUser();
      this.menuItems = [
        {
          label: this.username,
          items: [
            {
              label: 'Polubione',
              routerLink: '/liked-games',
            },
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

  private updateUser(): void {
    this.username = this.tokenStorageService.getUserDataFromStorage().username;
    this.permission = this.tokenStorageService.getUserDataFromStorage().permission;
  }


  logout(): void {
    this.updateMenuItems(); 
    this.permission = 0;
    this.tokenStorageService.removeToken(); 
    this.tokenStorageService.setLoggedIn(false);
    this.router.navigate(['/']);
  }
}
