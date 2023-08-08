import { Component, OnInit } from '@angular/core';
import {Software} from "../../models/Software.model";
import {CartService} from "../../services/cart/cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-software',
  templateUrl: './my-software.component.html',
  styleUrls: ['./my-software.component.scss']
})
export class MySoftwareComponent implements OnInit {

  purchasedItems: Software[] = [];

  constructor(private cartService: CartService,
              private router: Router) { }

  ngOnInit(): void {
    this.purchasedItems = this.cartService.getPurchasedItems();
  }

  showSoftwareDetail(id: any) {
    this.router.navigate(['/software', id]);
  }


}
