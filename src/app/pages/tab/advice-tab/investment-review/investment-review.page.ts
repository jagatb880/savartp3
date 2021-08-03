import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-review',
  templateUrl: './investment-review.page.html',
  styleUrls: ['./investment-review.page.scss'],
})
export class InvestmentReviewPage implements OnInit {
  downtext: boolean;

  constructor() { 
    this.downtext = false;
  }

  ngOnInit() {
  }
  down(){
    this.downtext = true;
  }
  up(){
    this.downtext = false;
  }
}
