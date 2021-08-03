import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestmentReviewPageRoutingModule } from './investment-review-routing.module';

import { InvestmentReviewPage } from './investment-review.page';
import { GuidelineHeaderComponentModule } from 'src/app/components/guideline-header/guideline-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidelineHeaderComponentModule,
    InvestmentReviewPageRoutingModule
  ],
  declarations: [InvestmentReviewPage]
})
export class InvestmentReviewPageModule {}
