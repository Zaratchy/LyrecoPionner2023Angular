import { Component } from '@angular/core';
import {Customer} from "./models/Customer.model";
import {Router} from "@angular/router";
import {AuthentificationService} from "../app/services/authentification.service";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentCustomer: Customer | any;

  constructor(private app: AuthentificationService, private http: HttpClient, private router: Router) {

    this.app.authenticate(undefined, undefined);
  }


}
