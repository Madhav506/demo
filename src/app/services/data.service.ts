import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  shareData = new Subject<any>();

  // endPointUrl : string = "https://api.myjson.com/bins/qzuzi";
  _url: string = '/assets/db.json';
  shopListData: [] = [];
  constructor(private httpclient: HttpClient) { }

  public getShoppingList() {
    return this.httpclient.get(this._url);
  }

  setShopListData(res: any) {
    this.shopListData = res;
  }
  getShopListData() {
    return this.shopListData;
  }

}
