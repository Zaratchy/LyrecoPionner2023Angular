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
  currentCustomer: Customer | any;

  constructor(private authentificationService : AuthentificationService,
              public router:Router) {
    this.authentificationService.currentCustomer.subscribe(x => this.currentCustomer = x);
  }

  ngOnInit(): void {
    this.toggleMenu();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authentificationService.logout();
    this.router.navigate(['/login']);
  }

}
