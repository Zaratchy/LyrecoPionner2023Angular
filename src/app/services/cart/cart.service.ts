import { Injectable } from '@angular/core';
import {Software} from "../../models/Software.model";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private purchasedItems: Software[] = [];

  private cartItems: any[] = [];
  private mergedCartItemsSource = new BehaviorSubject<any[]>([]);
  mergedCartItems$ = this.mergedCartItemsSource.asObservable();

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }

  private saveCartToStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    this.mergedCartItemsSource.next([...this.cartItems]);
  }

  getCartItems(): Software[] {
    return this.cartItems;
  }

  buyCart(): void {
    this.cartItems.push();
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
