import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterAdviceComponent } from 'src/app/components/filter-advice/filter-advice.component';
import { NavController } from '@ionic/angular';
import { AdvicesService } from 'src/app/services/tabs/services/advices.service';
import { NetworkService } from 'src/app/services/network.service';
import { CommonService } from 'src/app/services/common.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-my-advice',
  templateUrl: './my-advice.page.html',
  styleUrls: ['./my-advice.page.scss'],
})
export class MyAdvicePage implements OnInit {

  selectedSegment:any;
  datas: any;
  constructor(private modalCtrl: ModalController,private navCtrl: NavController, private advicesSvc: AdvicesService,
    private networkSvc: NetworkService, private commonSvc: CommonService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.selectedSegment = 'advice'
    this.datas = []
    // this.datas = [{
    //   "advice_type":"Investment Advice",
    //   "price":10000,
    //   "fund_type":"Mutual Fund, Stocks",
    //   "date":"14 April, 2020",
    //   "show_price": false,
    //   // "url":"/tab/advice-investment-advice"
    // },
    // {
    //   "advice_type":"Research Request",
    //   "price":"Apple INC",
    //   "fund_type":"Mutual Fund",
    //   "date":"14 April, 2020",
    //   "show_price": false
    // },
    // {
    //   "advice_type":"Portfolio Review",
    //   "price":"Apple INC",
    //   "fund_type":"Mutual Fund",
    //   "date":"14 April, 2020",
    //   "show_price": false
    // }]
    for (let i = 0; i < this.datas.length; i++) {
      if(typeof(this.datas[i].price) == 'number'){
        this.datas[i].show_price = true;
      }
    }
  }

  ionViewWillEnter(){
    this.commonSvc.showLoader("Loading Advices...")
    this.getListOfAdvices();
  }

  getListOfAdvices(){
    if(this.networkSvc.online){
      this.advicesSvc.listOfAdvices(this.commonSvc.authToken).subscribe(response=>{
        this.commonSvc.dismissLoader();
        switch (response.statusCode) {
          case 0:
            this.datas = response.data;
            break;
          case 1:
            this.commonSvc.showMessage(response.data)
            break;
          case 2:
            this.commonSvc.showMessage(response.data)
            break;
          case 3:
            this.commonSvc.showMessage(response.data)
            break;
          }
      })
    }else{

    }
  }

  async openFilter(event: any) {
    const popover = await this.modalCtrl.create({
      component: FilterAdviceComponent,
      cssClass: 'filter-modal-class',
    });
    return await popover.present();
  }

  advice(data){
    if(data.advice_type == 'Investment Advice'){
      this.navCtrl.navigateForward(['/tab/advice-investment-advice'])
    }
    else if(data.advice_type == 'Portfolio Review'){
      this.navCtrl.navigateForward(['/tab/advice-portfolio-review'])
    }
    else{

    }
  }

  convertDate(requestedDate){
    let date = new Date(requestedDate)
    return this.datePipe.transform(date,"d MMMM,  y")
  }
}
