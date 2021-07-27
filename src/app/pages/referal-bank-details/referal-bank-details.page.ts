import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-referal-bank-details',
  templateUrl: './referal-bank-details.page.html',
  styleUrls: ['./referal-bank-details.page.scss'],
})
export class ReferalBankDetailsPage implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
