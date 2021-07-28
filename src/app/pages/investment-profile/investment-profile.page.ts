import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-investment-profile',
  templateUrl: './investment-profile.page.html',
  styleUrls: ['./investment-profile.page.scss'],
})
export class InvestmentProfilePage implements OnInit {

  constructor(private location: Location,private navCtrl: NavController) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
  investmentblacklist(){
    this.navCtrl.navigateRoot(['investment-blacklist'])
  }
}
