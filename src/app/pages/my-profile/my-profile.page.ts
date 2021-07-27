import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  constructor(private navCtlr: NavController, private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  backBtn() {
    this.navCtlr.pop();
  }

  async stepper(){
    // const popover = await this.modalCtrl.create({
    //   component: ProfileStepperComponent,
      
    // });
    // return await popover.present();
  }

}
