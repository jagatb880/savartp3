import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { GoalManagermodalComponent } from 'src/app/components/goal-managermodal/goal-managermodal.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goal-manager-calculate',
  templateUrl: './goal-manager-calculate.page.html',
  styleUrls: ['./goal-manager-calculate.page.scss'],
})
export class GoalManagerCalculatePage implements OnInit {

  lumsumAmountInvest: any;
  constructor(private navCtrl: NavController,private modalCtrl: ModalController,private location: Location) { }

  ngOnInit() {
  }
  async openFilter(event: any) {
    const popover = await this.modalCtrl.create({
      component: GoalManagermodalComponent,
      cssClass: 'goal-manager-modal-class',
      
    });
    return await popover.present();
  }
  backBtn(){
    this.location.back();
  }

  onLumsumAmout(event){
    this.lumsumAmountInvest = event.detail.checked;
  }
}
