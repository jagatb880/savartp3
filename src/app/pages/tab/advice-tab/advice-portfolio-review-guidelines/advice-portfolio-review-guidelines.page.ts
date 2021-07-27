import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-advice-portfolio-review-guidelines',
  templateUrl: './advice-portfolio-review-guidelines.page.html',
  styleUrls: ['./advice-portfolio-review-guidelines.page.scss'],
})
export class AdvicePortfolioReviewGuidelinesPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
