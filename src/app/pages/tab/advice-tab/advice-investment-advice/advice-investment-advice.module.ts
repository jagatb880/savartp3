import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdviceInvestmentAdvicePageRoutingModule } from './advice-investment-advice-routing.module';

import { AdviceInvestmentAdvicePage } from './advice-investment-advice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdviceInvestmentAdvicePageRoutingModule
  ],
  declarations: [AdviceInvestmentAdvicePage]
})
export class AdviceInvestmentAdvicePageModule {}
