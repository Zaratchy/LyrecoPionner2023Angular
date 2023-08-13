import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs";
import {CustomerService} from "../../../../services/customer/customer.service";
import {SoftwareService} from "../../../../services/software/software.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-software',
  templateUrl: './create-software.component.html',
  styleUrls: ['./create-software.component.scss']
})
export class CreateSoftwareComponent implements OnInit {

  softwareForm: FormGroup | any;

  constructor(private formBuilder: FormBuilder,
              private softwareService: SoftwareService,
              private router: Router,
              ) { }

  ngOnInit(): void {
    this.softwareForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  get f() { return this.softwareForm.controls; }

  onSubmit() {

    this.softwareService.createSoftware(this.softwareForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/admin']);
        },
        error => {
          console.log("Cannot create software !");
        });

  }

}
