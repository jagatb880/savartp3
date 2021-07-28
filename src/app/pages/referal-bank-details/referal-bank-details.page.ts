import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-referal-bank-details',
  templateUrl: './referal-bank-details.page.html',
  styleUrls: ['./referal-bank-details.page.scss'],
})
export class ReferalBankDetailsPage implements OnInit {

  constructor(private location: Location,private navCtrl: NavController) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
  claimreward(){
    this.navCtrl.navigateRoot(['invest-request-details-submitted'])
  }
}
