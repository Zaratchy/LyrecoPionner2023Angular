import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Software} from "../../models/Software.model";
import {Customer} from "../../models/Customer.model";

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

  createSoftware(software: Software) {
    return this.http.post(`${this.apiUrl}/softwares/create`, software,{'headers': headers});
  }

  deleteSoftware(id: number): Observable<any>  {
    const url = `${this.apiUrl}/softwares/delete/${id}`; // Utilisez le chemin correct pour la suppression
    return this.http.delete(url);
  }

  updateSoftware(id: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/softwares/update/${id}`; // Utilisez le chemin correct pour la mise à jour
    return this.http.put(url, updatedData);
  }


}
