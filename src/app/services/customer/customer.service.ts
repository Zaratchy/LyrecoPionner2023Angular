import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/Customer.model'; // Assurez-vous d'avoir un modèle Customer pour représenter les données du client.


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:8005/customer'; // Remplacez l'URL par l'URL réelle de votre API.

  constructor(private http: HttpClient) { }

  getCustomerById(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Customer>(url);
  }
}
