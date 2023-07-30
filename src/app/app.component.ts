import { Component } from '@angular/core';
import {Customer} from "./models/Customer.model";
import {Router} from "@angular/router";
import {AuthentificationService} from "../app/services/authentification.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentCustomer: Customer | any;

  constructor(
    private router: Router,
    private authenticationService: AuthentificationService
  ) {
    this.authenticationService.currentCustomer.subscribe(x => this.currentCustomer = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
