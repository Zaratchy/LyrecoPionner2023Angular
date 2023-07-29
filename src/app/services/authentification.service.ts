import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer.model';
import {BehaviorSubject, config, map, Observable, tap} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const headers= new HttpHeaders({
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
})


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private currentCustomerSubject: BehaviorSubject<Customer>;
  public currentCustomer: Observable<Customer>;
  private apiUrl = 'http://localhost:8005';

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.currentCustomerSubject = new BehaviorSubject<Customer>(JSON.parse(localStorage.getItem('currentCustomer')));
    this.currentCustomer = this.currentCustomerSubject.asObservable();
  }

  public get currentCustomerValue(): Customer {
    return this.currentCustomerSubject.value;
  }

  login(email: any, password: any) {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(map(customer => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentCustomer', JSON.stringify(customer));
        this.currentCustomerSubject.next(customer);
        return customer;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentCustomer');
    // @ts-ignore
    this.currentCustomerSubject.next(null);
  }

}
