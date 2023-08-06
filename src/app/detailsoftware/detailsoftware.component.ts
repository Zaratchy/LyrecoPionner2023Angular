import { Component, OnInit } from '@angular/core';
import {Software} from "../models/Software.model";
import {SoftwareService} from "../services/software/software.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../services/cart/cart.service";
import {AuthentificationService} from "../services/authentification/authentification.service";

@Component({
  selector: 'app-detailsoftware',
  templateUrl: './detailsoftware.component.html',
  styleUrls: ['./detailsoftware.component.scss']
})
export class DetailsoftwareComponent implements OnInit {

  software: Software | undefined;

  constructor(
    private softwareService: SoftwareService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private authentificationService: AuthentificationService
  ) {}

  ngOnInit() {
    this.getSoftwareDetail();
  }

  getSoftwareDetail() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      const softwareId = +id;
      this.softwareService.getSoftwareDetail(softwareId).subscribe((software) => {
        this.software = software;
      });
    }
  }

  addToCart(item: Software): void {
    if (this.authentificationService.isLoggedIn()) {
      this.cartService.addToCart(item);
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
