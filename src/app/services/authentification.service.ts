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
  private apiUrl = 'http://localhost:8005/customer';

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

    // Envoyer la requête POST au serveur pour l'authentification
    return this.http.post<Customer>(`${this.apiUrl}`, credentials)
      .pipe(
        tap((customer: Customer) => {
          // Si l'authentification réussit, enregistrez le token dans le stockage local (localStorage)
          localStorage.setItem('customerToken', customer.token);
        })
      );
  }

  logout(): void {
    // Effacer le token du stockage local lors de la déconnexion
    localStorage.removeItem('customerToken');
  }

  isAuthenticated(): boolean {
    // Vérifier si le client est authentifié en vérifiant la présence du token dans le stockage local
    return !!localStorage.getItem('customerToken');
  }

  getCustomerById(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Customer>(url);
  }
}
