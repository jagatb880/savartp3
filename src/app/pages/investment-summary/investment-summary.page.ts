import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-investment-summary',
  templateUrl: './investment-summary.page.html',
  styleUrls: ['./investment-summary.page.scss'],
})
export class InvestmentSummaryPage implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
