import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goal-manager',
  templateUrl: './goal-manager.page.html',
  styleUrls: ['./goal-manager.page.scss'],
})
export class GoalManagerPage implements OnInit {
  p_bar_value: number;
  constructor(private navCtrl: NavController,private location: Location) { }

  ngOnInit() {
  }
  
  setPercentBar(i) {
    setTimeout(() => {
      let apc = (i / 100)
      console.log(apc);
      this.p_bar_value = apc;
    }, 30 * i);
  }

  edit(){
    this.navCtrl.navigateForward(['/tab/goal-manager-calculate'])
  }
  backBtn(){
    this.location.back();
  }
}
