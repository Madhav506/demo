import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public shopData: any;
  public isSearchEnable: boolean = false;
  public searchText: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
/**
 * Method to Search an item among the list of products*/ 
  searchItem(searchTerm: any) {
    // console.log('searchTerm', searchTerm)
    // console.log('searchTermValue', searchTerm.value)
    if (searchTerm.value != undefined && searchTerm.value != '') {
      this.shopData = this.dataService.getShopListData().filter(
        (item: any) => item.category.search(new RegExp(searchTerm.value, 'i')) > -1);
      this.dataService.shareData.next(this.shopData);

    } else {
      this.shopData = this.dataService.getShopListData();
      this.dataService.shareData.next(this.shopData);
    }

  }

  toggleSearch() {
    if (!this.isSearchEnable) {
      this.isSearchEnable = true;
    } else {
      this.isSearchEnable = false;
    }
  }

}
