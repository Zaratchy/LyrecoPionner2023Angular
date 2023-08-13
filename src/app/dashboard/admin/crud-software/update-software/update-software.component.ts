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
  software: any;
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
        this.software = data;
        this.softwareForm.patchValue({ name: data.name });
        this.softwareForm.patchValue({ description: data.description });
        this.softwareForm.patchValue({ label: data.label });
        this.softwareForm.patchValue({ releaseDate: data.releaseDate });
        this.softwareForm.patchValue({ price: data.price });
        this.softwareForm.patchValue({ langage: data.langage });
      },
      (error) => {
        console.error('An error occurred:', error);
      }
    );
  }
  initForm(): void {
    this.softwareForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      label: ['', Validators.required],
      releaseDate: ['', Validators.required],
      price: ['', Validators.required],
      langage: ['', Validators.required]
    });
  }

  updateSoftware(): void {
    if (this.softwareForm.valid) {
      const updatedData = {
        name: this.softwareForm.value.name,
        description: this.softwareForm.value.description,
        label: this.softwareForm.value.label,
        releaseDate: this.softwareForm.value.releaseDate,
        price: this.softwareForm.value.price,
        langage: this.softwareForm.value.langage

      };

      this.softwareService.updateSoftware(this.softwareId, updatedData).subscribe(
        (data) => {
          this.software = data;
          // Affichez un message de confirmation ou effectuez une redirection ici
        },
        (error) => {
          console.error('An error occurred:', error);
        }
      );
    }
  }

}
