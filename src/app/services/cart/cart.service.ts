import { Injectable } from '@angular/core';
import {Software} from "../../models/Software.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Software[] = [];

  constructor() { }

  addToCart(item: Software): void {
    this.cartItems.push(item);
  }

  getCartItems(): Software[] {
    return this.cartItems;
  }
}
