import { Injectable } from '@angular/core';
import { Customer } from '../../models/Customer.model';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public isAuthenticated = false;

  private apiUrl = 'http://localhost:8005';

  constructor(private http: HttpClient, public router:Router) {
  }

  login(email: string, password: string) {
    const credential = {email, password};
    console.log(credential)
    this.isAuthenticated = true;
    console.log(this.isAuthenticated)
    return this.http.post<Customer>(`${this.apiUrl}/login`, credential);

  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }



  logout(): void {
    this.isAuthenticated = false;
  }


}
