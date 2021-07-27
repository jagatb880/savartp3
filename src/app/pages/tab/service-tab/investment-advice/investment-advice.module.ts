import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestmentAdvicePageRoutingModule } from './investment-advice-routing.module';

import { InvestmentAdvicePage } from './investment-advice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    InvestmentAdvicePageRoutingModule
  ],
  declarations: [InvestmentAdvicePage]
})
export class InvestmentAdvicePageModule {}
