import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items: any;
  length: number | undefined;
  item: any = {
    count: 0
  }
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }
  /**
   * Method to increement  the item quantity in cart*/
  addItemQuantity(item: { count: number; }) {
    if (item.count >= 0 && item.count < 10) {
      item.count = item.count + 1;//increement
      this.cartService.itemsInCart.next(this.cartService.getItemsInCart() + 1);
    } else {
      alert('Sorry for inconvenience, cannot add more than 10 items');
    }
  }
  /**
   * Method to decrement or reduce the  item quantity from cart*/
  removeItemQuantity(item: { count: number; }) {
    if (item.count > 1) {
      item.count = item.count - 1;//decreement
      this.cartService.itemsInCart.next(this.cartService.getItemsInCart() - 1);
    }
  }
  /**
   * Method to delete or remove the  item from cart*/
  removeCartItem(item: { id: any; count: number; }) {
    this.items = this.items.filter((element: any) => {
      return element.id != item.id;
    });
    this.cartService.itemsInCart.next(this.cartService.getItemsInCart() - item.count);
    if (this.items.length === 0) {
      this.cartService.setItems(this.items);
    }
  }
  /**
   * Method to caculate Total price of items added in the cart*/
  total() {
    return this.items.reduce((total: number, item: { price: number; discount: number; count: number; }) => total + ((item.price - (item.price * item.discount) / 100) * item.count), 0);
  }

}


