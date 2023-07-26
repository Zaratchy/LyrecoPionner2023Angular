import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/Customer.model';

const headers= new HttpHeaders({
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
})

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:8005/customers';

  constructor(private http: HttpClient) { }

  getCustomerById(id: number): Observable<Customer> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Customer>(url);
  }
  register(customer: Customer) {
    return this.http.post(`${this.apiUrl}/create`, customer,{'headers': headers});
  }
}
