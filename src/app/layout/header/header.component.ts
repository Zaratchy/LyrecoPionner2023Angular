import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../../services/authentification/authentification.service";
import {Router} from "@angular/router";
import {Customer} from "../../models/Customer.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentCustomer: Customer;

  constructor(private authentificationService : AuthentificationService,
              public router:Router) {
    this.currentCustomer = this.authentificationService.currentCustomerValue;
  }

  ngOnInit(): void {
  }

  isLoggedIn(): boolean {
    return this.authentificationService.isLoggedIn();
  }

  logout() {
    this.authentificationService.logout();
    this.router.navigate(['/login']);
  }

}
