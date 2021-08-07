import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrokerageAccountPageRoutingModule } from './brokerage-account-routing.module';

import { BrokerageAccountPage } from './brokerage-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrokerageAccountPageRoutingModule
  ],
  declarations: [BrokerageAccountPage]
})
export class BrokerageAccountPageModule {}
