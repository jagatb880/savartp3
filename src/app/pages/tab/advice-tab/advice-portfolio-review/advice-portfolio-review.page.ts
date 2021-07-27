import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { PortfolioRequestSummaryComponent } from 'src/app/components/portfolio-request-summary/portfolio-request-summary.component';

@Component({
  selector: 'app-advice-portfolio-review',
  templateUrl: './advice-portfolio-review.page.html',
  styleUrls: ['./advice-portfolio-review.page.scss'],
})
export class AdvicePortfolioReviewPage implements OnInit {

  constructor(private modalCtrl: ModalController,private location: Location,private navCtrl: NavController) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
  guideline(){
    this.navCtrl.navigateForward(['/tab/advice-portfolio-review-guidelines'])
  }
  async eyeicon(){
    const popover = await this.modalCtrl.create({
      component: PortfolioRequestSummaryComponent,
      cssClass: 'investment-modal-class',
    });
    return await popover.present();
  }
}
