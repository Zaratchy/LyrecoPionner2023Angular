import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../services/authentification/authentification.service";
import {CustomerService} from "../services/customer/customer.service";
import {first} from "rxjs";
import {Customer} from "../models/Customer.model";
import {Router} from "@angular/router";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentCustomer: Customer;
  customer: Customer[] | any;

  constructor(public authentificationService:AuthentificationService,
              public router:Router) {
    this.currentCustomer = this.authentificationService.currentCustomerValue;
  }


  ngOnInit() {
  }

  showCustomer(id: number){
      this.router.navigate(['/customers', id]);
  }



}
