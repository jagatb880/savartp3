import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { NavController, ModalController } from '@ionic/angular';
import { NetworkService } from 'src/app/services/network.service';
import { ServicesService } from 'src/app/services/tabs/services/services.service';

@Component({
  selector: 'app-portfolio-review-summary',
  templateUrl: './portfolio-review-summary.component.html',
  styleUrls: ['./portfolio-review-summary.component.scss'],
})
export class PortfolioReviewSummaryComponent implements OnInit {

  portfolioReviewObjs: any
  constructor(private commonSvc: CommonService, private navCtrl: NavController,private researchRequestSvc: ServicesService,
    private networkSvc: NetworkService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.portfolioReviewObjs = this.commonSvc.portfolioReviewObj;
    this.portfolioReviewObjs.forEach(data => {
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
          "request_type" : "P",
          "requests": this.portfolioReviewObjs
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
