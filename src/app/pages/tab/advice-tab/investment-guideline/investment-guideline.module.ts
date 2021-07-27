import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestmentGuidelinePageRoutingModule } from './investment-guideline-routing.module';

import { InvestmentGuidelinePage } from './investment-guideline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestmentGuidelinePageRoutingModule
  ],
  declarations: [InvestmentGuidelinePage]
})
export class InvestmentGuidelinePageModule {}
