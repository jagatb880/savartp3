import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvicePortfolioReviewGuidelinesPageRoutingModule } from './advice-portfolio-review-guidelines-routing.module';

import { AdvicePortfolioReviewGuidelinesPage } from './advice-portfolio-review-guidelines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvicePortfolioReviewGuidelinesPageRoutingModule
  ],
  declarations: [AdvicePortfolioReviewGuidelinesPage]
})
export class AdvicePortfolioReviewGuidelinesPageModule {}
