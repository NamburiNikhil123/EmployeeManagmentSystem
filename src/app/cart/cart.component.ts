import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any;
  temp: any;
  total: number;

  constructor() {
    this.total = 0;

    this.temp = localStorage.getItem("cartProds");
    this.cartItems = JSON.parse(this.temp);

    this.cartItems.forEach((product: any) => {
      this.total = this.total + product.price;
    });

  }

  ngOnInit() {
  }

  deleteFromCart(prod: any) {
    const i = this.cartItems.findIndex((product: any) => {
      return product.id == prod.id;
    });

    this.total = this.total - this.cartItems[i].price;

    this.cartItems.splice(i, 1);
    localStorage.setItem("cartProds", JSON.stringify(this.cartItems));
  }

  checkOut() {
    this.total = 0;
    this.cartItems = null;
    localStorage.setItem("cartProds", JSON.stringify(this.cartItems));
  }

}
