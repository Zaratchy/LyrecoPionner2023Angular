import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthentificationService} from "../services/authentification.service";
import {Customer} from "../models/Customer.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

  customer = {email: '', password: ''};

  constructor(private app: AuthentificationService, private http: HttpClient, private router: Router) {
  }

  login() {
    this.app.authenticate(this.customer, () => {
      this.router.navigateByUrl('/');
    });
    return false;
  }


}





