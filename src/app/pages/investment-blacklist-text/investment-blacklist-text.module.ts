import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestmentBlacklistTextPageRoutingModule } from './investment-blacklist-text-routing.module';

import { InvestmentBlacklistTextPage } from './investment-blacklist-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestmentBlacklistTextPageRoutingModule
  ],
  declarations: [InvestmentBlacklistTextPage]
})
export class InvestmentBlacklistTextPageModule {}
