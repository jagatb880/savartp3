import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestmentSummaryPageRoutingModule } from './investment-summary-routing.module';

import { InvestmentSummaryPage } from './investment-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestmentSummaryPageRoutingModule
  ],
  declarations: [InvestmentSummaryPage]
})
export class InvestmentSummaryPageModule {}
