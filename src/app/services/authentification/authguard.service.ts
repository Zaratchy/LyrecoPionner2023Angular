import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "./authentification.service";

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private authentificationService: AuthentificationService,
              private router: Router) { }

  canActivate(): boolean {
    if (this.authentificationService.isLoggedIn()) {
      return true; // L'utilisateur est authentifié, permet l'accès à la route
    } else {
      this.router.navigate(['/login']); // Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
      return false;
    }
  }


}
