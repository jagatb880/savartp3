import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResearchRequestInvestmentdescriptionPageRoutingModule } from './research-request-investmentdescription-routing.module';

import { ResearchRequestInvestmentdescriptionPage } from './research-request-investmentdescription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResearchRequestInvestmentdescriptionPageRoutingModule
  ],
  declarations: [ResearchRequestInvestmentdescriptionPage]
})
export class ResearchRequestInvestmentdescriptionPageModule {}
