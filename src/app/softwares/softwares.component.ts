import { Component, OnInit } from '@angular/core';
import {SoftwareService} from "../services/software/software.service";
import { Router } from '@angular/router';

@Component({
  selector: 'softwares',
  templateUrl: './softwares.component.html',
  styleUrls: ['./softwares.component.scss']
})
export class SoftwaresComponent implements OnInit {

  softwareList: any[] | undefined;

  constructor(private softwareService: SoftwareService, private router: Router) { }

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

  showSoftwareDetail(id: number) {
    this.router.navigate(['/software', id]);
  }

}



