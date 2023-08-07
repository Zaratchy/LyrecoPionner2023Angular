import { Component, OnInit } from '@angular/core';
import { Software } from '../models/Software.model';
import {CartService} from "../services/cart/cart.service";
import {AuthentificationService} from "../services/authentification/authentification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: Software[] = [];

  constructor(private cartService: CartService,
              private authentificationService: AuthentificationService,
              private router: Router,) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  private saveCartToStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  removeFromCart(item: Software): void {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      this.saveCartToStorage();
    }
  }

  buyCart(): void {
    if (this.authentificationService.isLoggedIn()) {
      this.cartService.buyCart();
      this.cartItems = this.cartService.getCartItems();
      console.log(this.cartService);
      this.router.navigate(['my-softwares']);
    } else {
      console.log("Customer not connecting !");
      this.router.navigate(['login']);
    }

  }

}

