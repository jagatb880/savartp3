import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/services/network.service';
import { ModalController, NavController } from '@ionic/angular';
import { ServicesService } from 'src/app/services/tabs/services/services.service';

@Component({
  selector: 'app-research-request-summary',
  templateUrl: './research-request-summary.component.html',
  styleUrls: ['./research-request-summary.component.scss'],
})
export class ResearchRequestSummaryComponent implements OnInit {

  researchRequestObjs: any
  constructor(private commonSvc: CommonService, private navCtrl: NavController,private researchRequestSvc: ServicesService,
    private networkSvc: NetworkService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.researchRequestObjs = this.commonSvc.researchRequetoObj;
    this.researchRequestObjs.forEach(data => {
      if(typeof(data) == 'object'){
        data.country = typeof(data.country) == 'object'? data.country.join(','):data.country;
        data.assetclass = typeof(data.assetclass) == 'object'? data.assetclass.join(','):data.assetclass;
      }
    });
  }

  backBtn(){
    this.modalCtrl.dismiss();
  }

  confirmRequest(){
    if(this.networkSvc.online){
      let data = {
        "data":{
          "request_type" : "R",
          "requests": this.researchRequestObjs
        }
      }
      console.log(data)
      this.researchRequestSvc.raiseCustomRequest(data,this.commonSvc.authToken).subscribe(response=>{
        console.log(response)
        this.commonSvc.dismissLoader();
        switch (response.statusCode) {
        case 0:
          this.commonSvc.showMessage(response.data)
          this.modalCtrl.dismiss();
          this.navCtrl.navigateRoot(['tab/service-request-successful'])
          break;
        case 1:
          this.commonSvc.showMessage("Internal server error")
          break;
        case 2:
          this.commonSvc.showMessage("Incorrect mobile number ")
          break;
        case 3:
          this.commonSvc.showMessage("Incorrect password")
          break;
        }
      })
    }else{

    }
    ///tab/research-request-successful
  }
}

