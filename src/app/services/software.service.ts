import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Software} from "../models/Software.model";

const headers= new HttpHeaders({
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': '*'
})
@Injectable({
  providedIn: 'root'
})
export class SoftwareService {
  private apiUrl = 'http://localhost:8005';

  constructor(private http: HttpClient) { }

  getAllSoftware(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/softwares');
  }

  getSoftwareDetail(id: number): Observable<Software> {
    return this.http.get<Software>(this.apiUrl + `/software/${id}`);
  }

}
