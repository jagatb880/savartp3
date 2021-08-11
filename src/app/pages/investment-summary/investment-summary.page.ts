import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-investment-summary',
  templateUrl: './investment-summary.page.html',
  styleUrls: ['./investment-summary.page.scss'],
})
export class InvestmentSummaryPage implements OnInit {
  planreached: boolean;
  planreachedome: boolean;
  count: number;
  p_bar_value: number;
  r_bar_value:number;
  k_bar_value:number;
  constructor(private location: Location,) { 
    this.planreached = true;
    this.planreachedome = false;
    this.count= 16;
    this.setPercentBar()
    this.firststausbar()
    this.secondstausbar()
  }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
  setPercentBar() {
    setTimeout(() => {
      let apc = (this.count/100)
      console.log(apc);
      this.p_bar_value = apc;
    }, );
  }

  firststausbar() {
    setTimeout(() => {
      let apc = (100 / 100)
      console.log(apc);
      this.r_bar_value = apc;
    }, );
  }
  secondstausbar() {
    setTimeout(() => {
      let apc = (0 / 100)
      console.log(apc);
      this.k_bar_value = apc;
    }, );
  }
}
