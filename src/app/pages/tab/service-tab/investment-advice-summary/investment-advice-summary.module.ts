import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestmentAdviceSummaryPageRoutingModule } from './investment-advice-summary-routing.module';

import { InvestmentAdviceSummaryPage } from './investment-advice-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestmentAdviceSummaryPageRoutingModule
  ],
  declarations: [InvestmentAdviceSummaryPage]
})
export class InvestmentAdviceSummaryPageModule {}
