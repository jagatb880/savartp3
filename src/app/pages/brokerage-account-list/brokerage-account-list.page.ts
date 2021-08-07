import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brokerage-account-list',
  templateUrl: './brokerage-account-list.page.html',
  styleUrls: ['./brokerage-account-list.page.scss'],
})
export class BrokerageAccountListPage implements OnInit {
  product: number;

  constructor() { 
    this.product= 1;
  }

  ngOnInit() {
  }
  decreaseProductCount() {
    // if(typeof product.count === 'undefined') {
    //    product.count = 1;
    // }
    this.product=1;
    if (this.product > 1) {
      this.product--;
    }
  }
  incrementProductCount() {
    // if(typeof product.count === 'undefined') {
    //    product.count = 1;
    // }
    this.product= 1;
    this.product++;
  }

}
