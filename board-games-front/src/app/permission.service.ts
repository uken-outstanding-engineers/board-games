import { Injectable } from "@angular/core";
import { TokenStorageService } from "./token-storage.service";

@Injectable({
    providedIn: 'root'
  })
  export class PermissionService {
    constructor(private tokenStorageService: TokenStorageService) {}
  
    checkPermission(): boolean {
      const userData = this.tokenStorageService.getUserDataFromStorage();
      return userData && userData.permission >= 1;
    }
  }