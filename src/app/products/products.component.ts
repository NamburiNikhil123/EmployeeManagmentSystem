import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  productsCart: any;

  constructor() {

    this.productsCart = [];

    this.products = [
      {id:1001, name:"Nokia",   price:14999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/10001.jpg"},
      {id:1002, name:"Samsung", price:24999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/10002.jpg"},
      {id:1003, name:"IPhone",  price:34999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/10003.jpg"},
      {id:1004, name:"RealMe",  price:44999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/10004.jpg"},
      {id:1005, name:"Oppo",    price:54999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/10005.jpg"},
      {id:1006, name:"Vivo",    price:64999.00, description:"No Cost EMI Applicable", imgsrc:"assets/Images/10006.jpg"}
    ];
  }

  ngOnInit() {
  }

  addToCart(prod: any) {
    console.log(prod);

    this.productsCart.push(prod);
    localStorage.setItem("cartProds", JSON.stringify(this.productsCart));

  }

}
