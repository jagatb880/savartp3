import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { NetworkService } from 'src/app/services/network.service';
import { ServicesService } from 'src/app/services/tabs/services/services.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-investment-advice',
  templateUrl: './investment-advice.page.html',
  styleUrls: ['./investment-advice.page.scss'],
})
export class InvestmentAdvicePage implements OnInit {
  isRepeatRequest:false;
  isSpecialRequest:false;
  selectedFrequency: number;
  daysOfMonth: number[]
  weeksOfMonth: number[]
  dayList: number[];
  investmentRequest: FormGroup;
  enableMonthDate: boolean;
  addCountryIndexs: any[];
  addCountryObj = {
    "country":"",
    "investment":0
  }
  datas: any;
  constructor(private location: Location, private fb: FormBuilder, private commonSvc: CommonService,
    private networkSvc: NetworkService, private navCtrl: NavController) { 
    this.createInvestmentRequestForm();
  }

  ngOnInit() {
    this.dayList = [];
    this.daysOfMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    this.weeksOfMonth = [1,2,3,4]
    this.addCountryIndexs = [];
    this.addCountryIndexs.push(this.addCountryObj);
    this.datas = [
      {
        "name":"ELSS (Tax-Saving MF)",
        "status":false
      },
      {
        "name":"New Fund Offers coverage",
        "status":false
      },
      {
        "name":"Micro-cap investments",
        "status":false
      },
      {
        "name":"IPO coverage",
        "status":false
      }
    ]
  }

  createInvestmentRequestForm(){
    this.investmentRequest = this.fb.group({
      currency:["INR",Validators.required],
      investment_amount: ["", Validators.required],
      countries:[null,Validators.required],
      comment:["",Validators.required],
      assetclass:[null,Validators.required],
      theme:[null,Validators.required],
      investment_mode:["One Time"],
      investment_monthDate:[null],
      investment_weeklyDay:[null],
      investment_firstFortDate:[null],
      investment_secondFortDate:[null]
    });
  }
  onSpecialRequest(event){
    this.isSpecialRequest = event.detail.checked;
    if(this.isRepeatRequest){

    }else{

    }
  }

  onRepeatRequest(event){
    console.log(event.detail.checked);
    this.isRepeatRequest = event.detail.checked;
    if(this.isRepeatRequest){
      this.investmentRequest.get('investment_mode').setValidators([Validators.required])
      this.investmentRequest.get('investment_mode').updateValueAndValidity();
    }else{
      this.enableMonthDate = undefined;
      this.investmentRequest.controls.investment_monthDate.setValue(null);
      this.investmentRequest.controls.investment_weeklyDay.setValue(null);
      this.investmentRequest.controls.investment_mode.setValue("One Time");
      this.investmentRequest.get('investment_weeklyDay').clearValidators();
      this.investmentRequest.get('investment_weeklyDay').updateValueAndValidity();
      this.investmentRequest.get('investment_monthDate').clearValidators();
      this.investmentRequest.get('investment_monthDate').updateValueAndValidity();
      this.investmentRequest.get('investment_mode').clearValidators();
      this.investmentRequest.get('investment_mode').updateValueAndValidity();
    }
  }
  
  backBtn(){
    this.location.back();
  }

  frequenceChange(){
    if(this.investmentRequest.value.investment_mode == 'Monthly'){
      this.enableMonthDate = true
      this.investmentRequest.get('investment_monthDate').setValidators([Validators.required])
      this.investmentRequest.get('investment_monthDate').updateValueAndValidity();
      this.investmentRequest.get('investment_weeklyDay').clearValidators();
      this.investmentRequest.get('investment_weeklyDay').updateValueAndValidity();
    }else{
      this.enableMonthDate = false
      this.investmentRequest.get('investment_weeklyDay').setValidators([Validators.required])
      this.investmentRequest.get('investment_weeklyDay').updateValueAndValidity();
      this.investmentRequest.get('investment_monthDate').clearValidators();
      this.investmentRequest.get('investment_monthDate').updateValueAndValidity();
    }
  }

  numberOnlyValidation(event: any) {
    this.commonSvc.numberOnlyValidation(event)
  }

  requestAdvice(){
    if(this.networkSvc.online){
      if(this.investmentRequest.valid){
        let data = {"data":{
          "currency":this.investmentRequest.value.currency,
          "investment_amount":Number(this.investmentRequest.value.investment_amount),
          "investment_mode":this.investmentRequest.value.investment_mode,
          "investment_monthDate":this.investmentRequest.value.investment_monthDate,
          "investment_weeklyDay":this.investmentRequest.value.investment_weeklyDay,
          "investment_firstFortDate":this.investmentRequest.value.investment_firstFortDate,
          "investment_secondFortDate":this.investmentRequest.value.investment_secondFortDate,
          "countries":this.investmentRequest.value.countries,
          "comment":this.investmentRequest.value.comment,
          "assetclass":this.investmentRequest.value.assetclass,
          "theme":this.investmentRequest.value.theme
        }
      }
        console.log(data)
        this.navCtrl.navigateForward(['tab/investment-advice-summary'],{state: data})
      }
    }else{

    }
  }

  addCountry(){
    this.addCountryIndexs.push(this.addCountry)
  }

  chipEvent(data){
    if(data.status){
      data.status = false;
    }else{
      data.status = true;
    }
  }
}
