import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { ServicesService } from 'src/app/services/tabs/services/services.service';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-investment-advice-summary',
  templateUrl: './investment-advice-summary.page.html',
  styleUrls: ['./investment-advice-summary.page.scss'],
})
export class InvestmentAdviceSummaryPage implements OnInit {

  investmentData: any;
  data: any
  country
  constructor(private location: Location,private router: Router, private navCtrl: NavController,
    private commonSvc: CommonService,private investmentSvc: ServicesService, private networkSvc: NetworkService ) {
    this.investmentData = this.router.getCurrentNavigation().extras.state.data
    this.data = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit() {
    console.log(this.investmentData)
  }

  ionViewWillEnter(){
    this.investmentData.countries = this.investmentData.countries.join(',')
    this.investmentData.assetclass = this.investmentData.assetclass.join(',')
    this.investmentData.theme = this.investmentData.theme.join(',')
  }

  backBtn(){
    this.location.back();
  }

  confirmRequest(){
    if(this.networkSvc.online){
      this.investmentSvc.raiseInvestmentRequest(this.data,this.commonSvc.authToken).subscribe(response=>{
        console.log(response)
        this.commonSvc.dismissLoader();
        switch (response.statusCode) {
        case 0:
          this.commonSvc.showMessage(response.data)
          this.navCtrl.navigateRoot(['tab/investment-request-successful'])
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
  }
}
