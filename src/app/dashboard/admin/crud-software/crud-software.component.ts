import { Component, OnInit } from '@angular/core';
import {SoftwareService} from "../../../services/software/software.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-crud-software',
  templateUrl: './crud-software.component.html',
  styleUrls: ['./crud-software.component.scss']
})
export class CrudSoftwareComponent implements OnInit {

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


  onDelete(id: number): void {
    this.softwareService.deleteSoftware(id)
      .subscribe(
        response => {
          console.log('Logiciel supprimé avec succès');
          // Mettez à jour votre liste de logiciels ou effectuez d'autres actions nécessaires après la suppression.
        },
        error => {
          console.error('Une erreur s\'est produite lors de la suppression :', error);
        }
      );
  }

  onUpdate(id: number, updatedData: any): void {
    this.softwareService.updateSoftware(id, updatedData)
      .subscribe(
        () => {
          console.log('Logiciel mis à jour avec succès');
          // Mettez à jour votre liste de logiciels ou effectuez d'autres actions nécessaires après la mise à jour.
        },
        error => {
          console.error('Une erreur s\'est produite lors de la mise à jour :', error);
        }
      );
  }

}
