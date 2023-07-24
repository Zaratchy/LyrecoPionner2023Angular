import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer.model';
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

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

  login(email: string, password: string): Observable<Customer> {
    const credentials = {
      email: email,
      password: password
    };

    return this.http.post<Customer>(`${this.apiUrl}/customer`, credentials)
      .pipe(
        tap((customer: Customer) => {
          localStorage.setItem('customerToken', customer.token);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('customerToken');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('customerToken');
  }

  getCustomerById(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Customer>(url);
  }
}
