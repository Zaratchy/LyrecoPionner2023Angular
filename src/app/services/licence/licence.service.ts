import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Licence} from "../../models/Licence.model";
import {Software} from "../../models/Software.model";

const headers= new HttpHeaders({
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
})

@Injectable({
  providedIn: 'root'
})
export class LicenceService {
  private apiUrl = 'http://localhost:8005'

  constructor(private http: HttpClient) { }

  getLicence(id: number): Observable<Licence> {
    return this.http.get<Licence>(this.apiUrl + `/licence/${id}`);
  }

  createLicence(licence: Licence) {
    return this.http.post(`${this.apiUrl}/licences/create`, licence,{'headers': headers});
  }

  updateLicence(id: number, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/licences/${id}`, updatedData);
  }


}
