import { Injectable } from '@angular/core';
import { Customer } from '../models/Customer.model';
import {BehaviorSubject, config, map, Observable, tap} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

const headers= new HttpHeaders({
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
})


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  authenticated = false;
  private apiUrl = 'http://localhost:8005';

  constructor(private http: HttpClient) {
  }

  authenticate(credentials: { email: any; password: any; } | undefined, callback: { (): void; (): any; } | undefined) {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.email + ':' + credentials.password)
    } : {});

    this.http.get('login', {headers: headers}).subscribe(response => {

      return callback && callback();
    });

  }

}
