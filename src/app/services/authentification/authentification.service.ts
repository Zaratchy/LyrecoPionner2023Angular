import { Injectable } from '@angular/core';
import { Customer } from '../../models/Customer.model';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {LocalStorageService} from "../localStorage/local-storage.service";
import {BehaviorSubject, map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private currentCustomerSubject: BehaviorSubject<Customer> | any;
  public currentCustomer: Observable<Customer>;
  public isAuthenticated = false;

  private apiUrl = 'http://localhost:8005';

  constructor(private http: HttpClient,
              public router:Router,
              private localStorageService: LocalStorageService) {
    this.currentCustomerSubject = new BehaviorSubject<Customer>(JSON.parse(<string>localStorageService.get('customerId')));
    this.currentCustomer = this.currentCustomerSubject.asObservable();
  }

  login(email: string, password: string) {
    const credential = {email, password};
    console.log(credential)
    console.log(this.isAuthenticated)
    return this.http.post<Customer>(`${this.apiUrl}/login`, credential)
      .pipe(map(customer => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.localStorageService.set('customerId', JSON.stringify(customer.id));
        this.currentCustomerSubject.next(customer);
        this.isAuthenticated = true;
        return customer;
      }));
  }

  isAdmin(): boolean {
    const user = this.currentCustomerSubject.value; // Supposons que currentCustomerSubject contienne les informations de l'utilisateur actuel
    return user && user.role.id === 1;
  }


  public get currentCustomerValue(): Customer {
    return this.currentCustomerSubject.value;
  }

  logout(): void {
    this.isAuthenticated = false;
    console.log(this.isAuthenticated)
    this.localStorageService.remove('customerId');
    this.currentCustomerSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

}
