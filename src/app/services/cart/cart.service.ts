import { Injectable } from '@angular/core';
import {Software} from "../../models/Software.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Software[] = [];
  private purchasedItems: Software[] = [];

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }

  private saveCartToStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  addToCart(item: Software): void {
    this.cartItems.push(item);
    this.saveCartToStorage();
  }

  getCartItems(): Software[] {
    return this.cartItems;
  }

  checkout(): void {
    this.purchasedItems = [...this.cartItems];
    this.cartItems = [];
    this.saveCartToStorage();
  }

  getPurchasedItems(): Software[] {
    return this.purchasedItems;
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartToStorage();
  }
}
