import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthentificationService} from "../services/authentification.service";
import {Customer} from "../models/Customer.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  isLoggedIn: boolean = false;
  customer: Customer | any;
  f: any;

  constructor(
      private formBuilder: FormBuilder,
      private AuthentificationService: AuthentificationService,
      private router: Router,
      ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.isLoggedIn = this.AuthentificationService.isAuthenticated();

    if (this.isLoggedIn) {
      this.AuthentificationService.getCustomerById(1).subscribe(
        (customer: Customer) => {
          this.customer = customer;
        },
          (error: any) => {
          console.error(error);
        }
      );
    }
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    this.AuthentificationService.login(email, password).subscribe(
      (customer: Customer) => {
        this.isLoggedIn = true;
        this.customer = customer;
        this.router.navigate(['/home']);
      },
      error => {
        console.error(error);
      }
    );
  }

  logout() {
    this.AuthentificationService.logout();
    this.isLoggedIn = false;
  }

}





