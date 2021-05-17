import { Component, OnInit } from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  itemCount: number = 0;
  constructor(private cartService: CartService) {}
    //  constructor() {}

  ngOnInit() {
    this.cartService.itemsInCart
      .subscribe(response => {
        this.cartService.setItemsInCart(response);
        this.itemCount = response;
      });
  }

}
