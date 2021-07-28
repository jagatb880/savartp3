import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-investment-blacklist',
  templateUrl: './investment-blacklist.page.html',
  styleUrls: ['./investment-blacklist.page.scss'],
})
export class InvestmentBlacklistPage implements OnInit {
  datas: { name: string; status: boolean; }[];
  minus: boolean;

  constructor(private location: Location,private navCtrl: NavController) {
    this.minus = false;
   }
   readguideline(){
    this.navCtrl.navigateRoot(['investment-blacklist-text'])
   }
  ngOnInit() {
    this.datas = [
      {
        "name":"All",
        "status":false
      },
      {
        "name":"Mining & Drilling",
        "status":false
      },
      {
        "name":"Toxic polluters",
        "status":false
      },
      {
        "name":"Oil & Natural Gas",
        "status":false
      },
      {
        "name":"Non-biodegradable plastic & plastic based",
        "status":false
      },
      // {
      //   "name":"Sumi",
      //   "status":false
      // },
      // {
      //   "name":"Sanghamitra",
      //   "status":false
      // },
      // {
      //   "name":"Jagat",
      //   "status":false
      // },
    ]
  }
  chipEvent(data){
    if(data.status){
      if(data.name == 'All'){
        this.datas.forEach(data => {
          data.status = false
        });
      }else{
        data.status = false;
      }
    }else{
      if(data.name == 'All'){
        this.datas.forEach(data => {
          data.status = true
        });
      }else{
        data.status = true
      }
    }
  }

  plusopen(){
    this.minus = true
  }
  plusminus(){
    this.minus = false;
  }

  backBtn(){
    this.location.back();
  }
}

