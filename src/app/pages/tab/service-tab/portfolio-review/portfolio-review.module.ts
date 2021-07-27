import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfolioReviewPageRoutingModule } from './portfolio-review-routing.module';

import { PortfolioReviewPage } from './portfolio-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PortfolioReviewPageRoutingModule
  ],
  declarations: [PortfolioReviewPage]
})
export class PortfolioReviewPageModule {}
