import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResearchRequestSummaryPageRoutingModule } from './research-request-summary-routing.module';

import { ResearchRequestSummaryPage } from './research-request-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResearchRequestSummaryPageRoutingModule
  ],
  declarations: [ResearchRequestSummaryPage]
})
export class ResearchRequestSummaryPageModule {}
