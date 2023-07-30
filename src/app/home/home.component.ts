import { Component, OnInit } from '@angular/core';
import {Customer} from "../models/Customer.model";
import {AuthentificationService} from "../services/authentification.service";
import {CustomerService} from "../services/customer/customer.service";
import {first} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Demo';
  customer = {};

  constructor(private app: AuthentificationService, private http: HttpClient) {
    http.get('http://localhost:8005').subscribe(data => this.customer = data);
  }

  authenticated() { return this.app.authenticated; }

  ngOnInit() {
  }



}
