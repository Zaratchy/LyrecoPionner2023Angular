import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthentificationService} from "../services/authentification/authentification.service";
import {Customer} from "../models/Customer.model";
import {LocalStorageService} from "../services/localStorage/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  loading = false;

  constructor(private authentificationService: AuthentificationService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  login() {
    console.log(this.loginForm.value);
    this.loading = true;
    this.authentificationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (customer: Customer) => {
        if (customer) {
          this.localStorageService.set('customerId', JSON.stringify(customer.id))
          console.log("Success connect", customer);
          this.loading = false;
          this.router.navigate(['/customers', customer.id]);
        } else {
          console.log("Error connect");
          this.loading = false;
          alert("Incorrect credentials");
        }
      },
      (error) => {
        console.error("Error connect :", error);
        this.loading = false;
        alert("An error occurred while logging in.");
      }
    );
  }



}





