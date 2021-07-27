import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReferalTermAndConditionPageRoutingModule } from './referal-term-and-condition-routing.module';

import { ReferalTermAndConditionPage } from './referal-term-and-condition.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReferalTermAndConditionPageRoutingModule
  ],
  declarations: [ReferalTermAndConditionPage]
})
export class ReferalTermAndConditionPageModule {}
