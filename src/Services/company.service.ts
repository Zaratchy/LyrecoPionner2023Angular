import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";
import {Company} from "../Models/Company.model";


const baseUrl = environment.endpoint;
const path = 'company/';
const headers= new HttpHeaders({
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
})
@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor(private _http: HttpClient) { }

  getAll():Observable<Company[]> {
    console.log(this._http.get<Company[]>(baseUrl + path).subscribe(value => console.log(value)))
    return this._http.get<Company[]>(baseUrl + path);
  }

  register(company: Company) {
    return this._http.post<Company>(baseUrl + path, company, {'headers': headers});
  }

  updateCompany(company: Company) {
    return this._http.put<Company>(baseUrl + path, company, {'headers': headers});
  }

  delete(company: Company) {
    return this._http.delete<Company>(baseUrl, {'headers': headers});
  }

}




