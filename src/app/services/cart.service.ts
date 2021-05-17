import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  itemsInCart = new Subject<any>();
  items = [];
  itemInCart: number = 0;

  addToCart(product) {
    this.itemInCart = this.itemInCart + 1;
    this.setItemsInCart(this.itemInCart);

    if (this.items.length === 0) {
      product.count = 1;
      this.items.push(product);

    } else {

      if (!(JSON.stringify(this.items)).includes(product.id)) {
        this.items.push(product);
        product.count = 1;
      } else {
        product.count++;
      }
    }
  }

  getItems() {
    return this.items;
  }

  setItems(items: any) {
    this.items = items;
  }

  getItemsInCart() {
    return this.itemInCart;
  }

  setItemsInCart(itemCount: number) {
    this.itemInCart = itemCount;
  }

}
