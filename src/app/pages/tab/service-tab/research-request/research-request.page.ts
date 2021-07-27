import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';
import { NavController, ModalController } from '@ionic/angular';
import { NetworkService } from 'src/app/services/network.service';
import { ResearchRequestSummaryComponent } from 'src/app/components/research-request-summary/research-request-summary.component';

@Component({
  selector: 'app-research-request',
  templateUrl: './research-request.page.html',
  styleUrls: ['./research-request.page.scss'],
})
export class ResearchRequestPage implements OnInit {


  requestResearchForm: FormGroup;
  constructor(private location: Location, private fb: FormBuilder, private commonSvc: CommonService,
    private networkSvc: NetworkService, private modalCtrl: ModalController, private datePipe: DatePipe ) { 
    this.createRequestResearchForm();
   }

   createRequestResearchForm(){
    this.requestResearchForm = this.fb.group({
      company_name:["",Validators.required],
      country:["",Validators.required],
      assetclass:["",Validators.required],
      comment:["",Validators.required],
      amount:[0],
      quantity:[0],
      purchasedate:[""]
    });
   }

  ngOnInit() {
    this.requestResearchForm.controls.purchasedate.setValue(this.datePipe.transform(new Date(),"YYYY-MM-dd"))
  }

  backBtn(){
    this.location.back();
  }

  save(){
    if(this.networkSvc.online){
      this.commonSvc.researchRequetoObj.push(this.requestResearchForm.value);
      this.requestResearchForm.reset();
      this.openSummary()
    }else{

    }
  }
  
  async openSummary()
  {
    const modal = await this.modalCtrl.create({
     component: ResearchRequestSummaryComponent
   });
   return await modal.present();
  }
}
