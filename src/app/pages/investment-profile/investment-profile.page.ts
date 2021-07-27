import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-investment-profile',
  templateUrl: './investment-profile.page.html',
  styleUrls: ['./investment-profile.page.scss'],
})
export class InvestmentProfilePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
