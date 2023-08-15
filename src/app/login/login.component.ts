import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
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
  welcomeMessage: string | any;
  showMessageRegistered: boolean = true;
  submitted = false;

  constructor(private authentificationService: AuthentificationService,
              private router: Router,
              private localStorageService: LocalStorageService,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.route.queryParams.subscribe(params => {
      this.welcomeMessage = params['message'];
      this.hideMessageAfterDelay();
    });
  }

  get f() { return this.loginForm.controls; }


  login() {
    this.submitted = true;
    console.log(this.loginForm.value);
    this.authentificationService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (customer: Customer) => {
        if (customer) {
          this.localStorageService.set('customerId', JSON.stringify(customer.id))
          console.log("Success connect", customer);
          this.router.navigate(['/home'], {
            queryParams: { message: 'Bienvenue sur notre site !' },
          });
        } else {
          console.log("Error connect");
          alert("Incorrect credentials");
        }
      },
      (error) => {
        console.error("Error connect :", error);
        alert("An error occurred while logging in.");
      }
    );
  }

  hideMessageAfterDelay() {
    setTimeout(() => {
      this.showMessageRegistered = false;
    }, 3000);
  }

}





