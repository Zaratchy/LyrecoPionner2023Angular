import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SoftwareService} from "../../../../services/software/software.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";
import {Software} from "../../../../models/Software.model";

@Component({
  selector: 'app-update-software',
  templateUrl: './update-software.component.html',
  styleUrls: ['./update-software.component.scss']
})
export class UpdateSoftwareComponent implements OnInit {

  softwareId: number | any;
  softwareDetails: any;
  softwareForm: FormGroup | any;

  constructor(
    private route: ActivatedRoute,
    private softwareService: SoftwareService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.softwareId = Number(params.get('id'));
      this.loadSoftwareDetails();
    });
    this.initForm();
  }

  loadSoftwareDetails(): void {
    this.softwareService.getSoftwareDetail(this.softwareId).subscribe(
      (data) => {
        this.softwareDetails = data;
        this.softwareForm.patchValue({ name: data.name });
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }

  initForm(): void {
    this.softwareForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  updateSoftware(): void {
    if (this.softwareForm.valid) {
      const updatedData = {
        name: this.softwareForm.value.name,
      };

      this.softwareService.updateSoftware(this.softwareId, updatedData).subscribe(
        (data) => {
          this.softwareDetails = data;
          // Affichez un message de confirmation ou effectuez une redirection ici
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    }
  }

}
