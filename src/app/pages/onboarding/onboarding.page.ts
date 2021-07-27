import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {

  constructor(private navCtrl: NavController, private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  signup(){
    this.navCtrl.navigateForward(['signup']);
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeGesture(false)
  }

  ionViewDidLeave() {
    this.menuCtrl.swipeGesture(true)
  }
}
