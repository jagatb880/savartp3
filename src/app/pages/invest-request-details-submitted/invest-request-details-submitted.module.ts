import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestRequestDetailsSubmittedPageRoutingModule } from './invest-request-details-submitted-routing.module';

import { InvestRequestDetailsSubmittedPage } from './invest-request-details-submitted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestRequestDetailsSubmittedPageRoutingModule
  ],
  declarations: [InvestRequestDetailsSubmittedPage]
})
export class InvestRequestDetailsSubmittedPageModule {}
