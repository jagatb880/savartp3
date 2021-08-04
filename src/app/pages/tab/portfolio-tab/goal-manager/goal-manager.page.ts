import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goal-manager',
  templateUrl: './goal-manager.page.html',
  styleUrls: ['./goal-manager.page.scss'],
})
export class GoalManagerPage implements OnInit {
  p_bar_value: any;
  datas: { targetamount: string; 'monthly_investmet_amount': string; 'goal_duartion': string; 'started_date': string; 'ended_date': string; progresscount: number; }[];
  count: any;
  
  constructor(private location: Location){
    // this.count = this.datas[0].progresscount.toString();
    
    
    this.datas = [{'targetamount':'10,000','monthly_investmet_amount':'10,000',
    'goal_duartion':'June 2021 - June 2024','started_date':'21 Feb 2020','ended_date':'16 Aug 2021','progresscount':16},
    {'targetamount':'10,000','monthly_investmet_amount':'10,000',
    'goal_duartion':'June 2021 - June 2024','started_date':'21 Feb 2020','ended_date':'16 Aug 2021','progresscount':90},
    {'targetamount':'10,000','monthly_investmet_amount':'10,000',
    'goal_duartion':'June 2021 - June 2024','started_date':'21 Feb 2020','ended_date':'16 Aug 2021','progresscount':70}]
    for(let i = 0;i<this.datas.length;i++){
        this.count = this.datas[i].progresscount;
        console.log(this.count);
        // setTimeout(() => {
          let apc = (this.count/100)
          console.log(apc);
          this.datas[i].progresscount = apc;
        // }, 30*this.count);
    }
  }

  ngOnInit() {
  }
  // setPercentBar(i) {
  //   setTimeout(() => {
  //     let apc = (i/100)
  //     console.log(apc);
  //     this.p_bar_value = apc;
  //   }, );
  // }
  
  backBtn(){
    this.location.back();
  }
}
