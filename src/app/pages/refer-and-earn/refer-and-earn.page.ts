import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-refer-and-earn',
  templateUrl: './refer-and-earn.page.html',
  styleUrls: ['./refer-and-earn.page.scss'],
})
export class ReferAndEarnPage implements OnInit {

  constructor(private location: Location,private navCtrl: NavController) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
  claimmymoney(){
    this.navCtrl.navigateRoot(['referal-bank-details'])
  }
  icon(){
    this.navCtrl.navigateRoot(['referal-term-and-condition'])
  }
}
