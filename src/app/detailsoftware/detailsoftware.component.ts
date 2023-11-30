import { Component, OnInit } from '@angular/core';
import {Software} from "../models/Software.model";
import {SoftwareService} from "../services/software/software.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../services/cart/cart.service";
import {AuthentificationService} from "../services/authentification/authentification.service";
import {LicenceService} from "../services/licence/licence.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlertService} from "../services/_alert/alert.service";

@Component({
  selector: 'app-detailsoftware',
  templateUrl: './detailsoftware.component.html',
  styleUrls: ['./detailsoftware.component.scss']
})
export class DetailsoftwareComponent implements OnInit {

  softwareForm: FormGroup | any;
  software: Software | undefined;
  submitted = false;

  constructor(
    private softwareService: SoftwareService,
    private licenceService: LicenceService,
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authentificationService: AuthentificationService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.softwareForm = this.formBuilder.group({
      number: ['', Validators.required],
      duration: ['', Validators.required]
    });

    this.getSoftwareDetail();
  }

  get f() { return this.softwareForm.controls; }

  getSoftwareDetail() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const softwareId = +id;
      this.softwareService.getSoftwareDetail(softwareId).subscribe((software) => {
        this.software = software;
      });
    }
  }

  onSubmit(itemSoftware: Software){
    this.submitted = true;

    // @ts-ignore
    let totalPriceByNumberLicence = this.softwareForm.value.number * itemSoftware.price;
    // @ts-ignore
    let totalPriceByNumberDuration = this.softwareForm.value.duration * itemSoftware.price;
    let totalAmount = totalPriceByNumberDuration + totalPriceByNumberDuration;

    if (this.authentificationService.isLoggedIn()) {
      const mergedCartItem = { ...itemSoftware, ...this.softwareForm.value, totalAmount };

      this.cartService.addToCart(mergedCartItem);

      console.log(this.cartService);
      this.router.navigate(['cart']);

    } else {

      console.log("Customer not connecting !");
      this.router.navigate(['login']);
    }

  }

  goBack() {
    this.router.navigate(['softwares']);
  }

}
