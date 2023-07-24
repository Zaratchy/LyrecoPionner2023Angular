import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../services/alert.service";
import {AuthentificationService} from "../services/authentification.service";
import {CustomerService} from "../services/customer/customer.service";
import {first} from "rxjs";
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
      private CustomerService: CustomerService,
      private router: Router,
      ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // Vérifier si le client est déjà connecté lors du chargement de la page
    this.isLoggedIn = this.AuthentificationService.isAuthenticated();

    // Si le client est déjà connecté, récupérer ses informations en utilisant l'ID 1 (vous pouvez remplacer 1 par l'ID approprié)
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

    // Appeler le service d'authentification pour envoyer les informations de connexion au serveur
    this.AuthentificationService.login(email, password).subscribe(
      (customer: Customer) => {
        // Authentification réussie : mettre à jour le statut de connexion et récupérer les informations du client
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
