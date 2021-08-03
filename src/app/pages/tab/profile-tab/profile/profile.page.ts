import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  p_bar_value: number;
  r_bar_value:number;
  k_bar_value:number;
  planreached : boolean;
  planreachedome: boolean;
  count: number;
  constructor() {
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
}
