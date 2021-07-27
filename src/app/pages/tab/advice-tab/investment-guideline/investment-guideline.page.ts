import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-investment-guideline',
  templateUrl: './investment-guideline.page.html',
  styleUrls: ['./investment-guideline.page.scss'],
})
export class InvestmentGuidelinePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
