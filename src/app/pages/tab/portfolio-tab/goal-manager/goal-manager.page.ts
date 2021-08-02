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
  r_bar_value:number;
  k_bar_value:number;
  planreached : boolean;
  planreachedome: boolean;
  count: number;
  // count: 16;
  constructor(private navCtrl: NavController,private location: Location) { 
    this.planreached = true;
    this.planreachedome = false;
    this.count= 16;
    this.setPercentBar()
    this.firststausbar()
    this.secondstausbar()
  }

  ngOnInit() {
  }
  
  setPercentBar() {
    setTimeout(() => {
      let apc = (this.count/100)
      console.log(apc);
      this.p_bar_value = apc;
    }, );
  }

  firststausbar() {
    setTimeout(() => {
      let apc = (100 / 100)
      console.log(apc);
      this.r_bar_value = apc;
    }, );
  }
  secondstausbar() {
    setTimeout(() => {
      let apc = (0 / 100)
      console.log(apc);
      this.k_bar_value = apc;
    }, );
  }
 


  edit(){
    this.navCtrl.navigateForward(['/tab/goal-manager-calculate'])
  }
  backBtn(){
    this.location.back();
  }
}
