import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/Customer.model";
import {AuthentificationService} from "../services/authentification.service";
import {CustomerService} from "../services/customer/customer.service";
import {first} from "rxjs";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: Customer;
  private customer: any[] | undefined;
  customers: any;

  constructor(
    private authenticationService: AuthentificationService,
    private customerService: CustomerService
  ) {
    this.currentUser = this.authenticationService.currentCustomerValue;
  }

  ngOnInit() {
    this.loadAllUsers();
  }



  private loadAllUsers() {
    this.customerService.getAll()
      .pipe(first())
      .subscribe(users => this.customers = this.customer);
  }

}
