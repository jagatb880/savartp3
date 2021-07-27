import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { ModalController } from '@ionic/angular';
import { NetworkService } from 'src/app/services/network.service';
import { PortfolioReviewSummaryComponent } from 'src/app/components/portfolio-review-summary/portfolio-review-summary.component';

@Component({
  selector: 'app-portfolio-review',
  templateUrl: './portfolio-review.page.html',
  styleUrls: ['./portfolio-review.page.scss'],
})
export class PortfolioReviewPage implements OnInit {


  portfolioReviewForm: FormGroup;
  daysOfMonth: number[];
  currentDate: any;
  constructor(private location: Location, private fb: FormBuilder, private commonSvc: CommonService,
    private networkSvc: NetworkService, private modalCtrl: ModalController, private datePipe: DatePipe ) { 
    this.createPortfolioReviewForm();
   }

   createPortfolioReviewForm(){
    this.portfolioReviewForm = this.fb.group({
      company_name:["",Validators.required],
      country:["",Validators.required],
      assetclass:["",Validators.required],
      comment:["",Validators.required],
      amount:["",Validators.required],
      quantity:["",Validators.required],
      purchasedate:["",Validators.required]
    });
   }

  ngOnInit() {
    this.daysOfMonth = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    this.currentDate = this.datePipe.transform(new Date(),"YYYY-MM-dd");
  }

  numberOnlyValidation(event){
    this.commonSvc.numberOnlyValidation(event)
  }

  backBtn(){
    this.location.back();
  }

  save(){
    if(this.networkSvc.online){
      this.portfolioReviewForm.controls.purchasedate.setValue(this.currentDate.substring(0,8)+this.portfolioReviewForm.get('purchasedate').value)
      this.commonSvc.portfolioReviewObj.push(this.portfolioReviewForm.value);
      this.portfolioReviewForm.reset();
      this.openSummary()
    }else{

    }
  }
  
  async openSummary()
  {
    const modal = await this.modalCtrl.create({
     component: PortfolioReviewSummaryComponent
   });
   return await modal.present();
  }
}

