import { Component, OnInit } from '@angular/core';
import {Software} from "../../models/Software.model";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-my-software',
  templateUrl: './my-software.component.html',
  styleUrls: ['./my-software.component.scss']
})
export class MySoftwareComponent implements OnInit {

  purchasedItems: Software[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.purchasedItems = this.cartService.getPurchasedItems();
  }


}
