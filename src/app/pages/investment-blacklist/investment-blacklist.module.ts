import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestmentBlacklistPageRoutingModule } from './investment-blacklist-routing.module';

import { InvestmentBlacklistPage } from './investment-blacklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestmentBlacklistPageRoutingModule
  ],
  declarations: [InvestmentBlacklistPage]
})
export class InvestmentBlacklistPageModule {}
