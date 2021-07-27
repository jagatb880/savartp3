import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferalBankDetailsPageRoutingModule } from './referal-bank-details-routing.module';

import { ReferalBankDetailsPage } from './referal-bank-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferalBankDetailsPageRoutingModule
  ],
  declarations: [ReferalBankDetailsPage]
})
export class ReferalBankDetailsPageModule {}
