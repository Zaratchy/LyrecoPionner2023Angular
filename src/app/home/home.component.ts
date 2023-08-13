import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from "../services/authentification/authentification.service";
import {Customer} from "../models/Customer.model";
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentCustomer: Customer;
  customer: Customer[] | any;
  welcomeMessage: string | any;
  showMessageLogged: boolean = true;

  constructor(public authentificationService:AuthentificationService,
              public router:Router,
              private route: ActivatedRoute) {
    this.currentCustomer = this.authentificationService.currentCustomerValue;
  }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.welcomeMessage = params['message'];
      this.hideMessageAfterDelay();
    });
  }

  showCustomer(id: number){
      this.router.navigate(['/customers', id]);
  }

  hideMessageAfterDelay() {
    setTimeout(() => {
      this.showMessageLogged = false;
    }, 3000); // 5000 milliseconds = 5 seconds
  }

}
