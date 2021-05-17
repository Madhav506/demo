import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DataService } from '../services/data.service';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  public currentValue: any;
  public modalRef: BsModalRef;
  public shopData: any;
  public minValue: number = 100;
  public maxValue: number = 10000;
  public isFilterTrue: boolean = false;
  public options: Options = {
    floor: 100,
    ceil: 10000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '\u20B9' + value;
        case LabelType.High:
          return '\u20B9' + value;
        default:
          return '\u20B9' + value;
      }
    }
  };

  constructor(private modalService: BsModalService, private shareDataService: DataService) { } // {2}
  /**
   * Method to open modal/dialog after clicking filter
   */
  public openModal(template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(
      template,
      {
        class: 'modal-sm modal-dialog-centered',
        backdrop: 'static'
      }
    );

  }

  ngOnInit() {

  }
  /**
   * Method to Filter the Products based on Price range*/
  applyFilter(filterFlag) {

    this.shareDataService.getShoppingList().subscribe(response => {
      this.shareDataService.setShopListData(response);
      this.shopData = this.shareDataService.getShopListData().filter((element: any) => {
        return element.price >= this.minValue && element.price <= this.maxValue;
      });

      this.shareDataService.setShopListData(this.shopData);
      this.shareDataService.shareData.next(this.shopData);
      if (filterFlag) {
        this.modalService.hide(1);
      }

    });

  }
}
