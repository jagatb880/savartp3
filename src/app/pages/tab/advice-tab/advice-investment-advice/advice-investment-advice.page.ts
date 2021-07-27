import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterInvestmentAdviceComponent } from 'src/app/components/filter-investment-advice/filter-investment-advice.component';
import { InvestmentRequestSummaryComponent } from 'src/app/components/investment-request-summary/investment-request-summary.component';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-advice-investment-advice',
  templateUrl: './advice-investment-advice.page.html',
  styleUrls: ['./advice-investment-advice.page.scss'],
})
export class AdviceInvestmentAdvicePage implements OnInit {

  constructor(private modalCtrl: ModalController,private location: Location,private navCtrl: NavController) { }

  ngOnInit() {
  }
  async openFilter(event: any) {
    const popover = await this.modalCtrl.create({
      component: FilterInvestmentAdviceComponent,
      
    });
    return await popover.present();
  }
  async eyeicon(){
    const popover = await this.modalCtrl.create({
      component: InvestmentRequestSummaryComponent,
      cssClass: 'investment-modal-class',
    });
    return await popover.present();
  }
  backBtn(){
    this.location.back();
  }
  readguideline(){
    this.navCtrl.navigateForward(['/tab/investment-guideline']);
  }
  sync(){
    this.navCtrl.navigateForward(['/tab/company-information']);
  }
}
