import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-research-request-investmentdescription',
  templateUrl: './research-request-investmentdescription.page.html',
  styleUrls: ['./research-request-investmentdescription.page.scss'],
})
export class ResearchRequestInvestmentdescriptionPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
