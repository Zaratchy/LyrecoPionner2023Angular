import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationService} from "../services/authentification/authentification.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(public authentificationService:AuthentificationService) {
  }


  ngOnInit() {
    console.log(this.authentificationService.isAuthenticated+" Connect on home")
    console.log(this.authentificationService.isLoggedIn())
  }



}
