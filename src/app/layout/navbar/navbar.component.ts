import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/authentification/authentification.service";
import {Router} from "@angular/router";
import {Customer} from "../../models/Customer.model";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isMenuOpen: boolean = true

  constructor(public router:Router,
              private authentificationService : AuthentificationService,) {
  }

  ngOnInit(): void {
    this.toggleMenu();
  }

  isLoggedIn(): boolean {
    return this.authentificationService.isLoggedIn();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isAdmin(): boolean {
    return this.authentificationService.isAdmin();
  }


}
