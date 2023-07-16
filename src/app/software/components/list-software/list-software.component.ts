import { Component, OnInit } from '@angular/core';
import {SoftwareService} from "../../../services/software.service";

@Component({
  selector: 'app-softwares',
  templateUrl: './list-software.component.html',
  styleUrls: ['./list-software.component.scss']
})
export class SoftwareComponent implements OnInit {

  softwareList: any[] | undefined;

  constructor(private softwareService: SoftwareService) { }

  ngOnInit(): void {
    this.getAllSoftware()
  }

  public getAllSoftware(){
    this.softwareService.getAllSoftware()
      .subscribe(
        (response) => {
          this.softwareList = response;
        },
        (error) => {
          console.error('Une erreur est survenue lors de la récupération des logiciels :', error);
        }
      );
  }

}
