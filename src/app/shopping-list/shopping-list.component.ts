import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  shoppingList: any;
  message: string;
  subscription: Subscription;
  products: any;

  constructor(private serviceData: DataService, private cartService: CartService) { }

  ngOnInit() {

    this.serviceData.getShoppingList().subscribe(response => {
      this.serviceData.setShopListData(response);
      this.shoppingList = response;
    });

    this.subscription = this.serviceData.shareData.pipe(
      debounceTime(500))
      .subscribe(data => {
        this.shoppingList = data;
      });

  }
  /**
   * Method to add product in to cart
   */
  addToCart(productData) {
    console.log(productData, "productdata")
    this.cartService.addToCart(productData);
    this.cartService.itemsInCart.next(this.cartService.getItemsInCart());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
