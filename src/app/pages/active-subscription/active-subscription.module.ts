import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveSubscriptionPageRoutingModule } from './active-subscription-routing.module';

import { ActiveSubscriptionPage } from './active-subscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveSubscriptionPageRoutingModule
  ],
  declarations: [ActiveSubscriptionPage]
})
export class ActiveSubscriptionPageModule {}
