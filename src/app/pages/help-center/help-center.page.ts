import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-help-center',
  templateUrl: './help-center.page.html',
  styleUrls: ['./help-center.page.scss'],
})
export class HelpCenterPage implements OnInit {

  constructor(private navCtrl: NavController,private location: Location,) { }

  ngOnInit() {
  }
  email(){
    this.navCtrl.navigateForward(['email-us'])
  }
  schedulecall(){
    this.navCtrl.navigateForward(['schedule-call'])
  }
  backBtn(){
    this.location.back();
  }
  aboutsavart(){
    this.navCtrl.navigateForward(['about-savart'])
  }
}
