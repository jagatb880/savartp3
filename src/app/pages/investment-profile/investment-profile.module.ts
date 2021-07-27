import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvestmentProfilePageRoutingModule } from './investment-profile-routing.module';

import { InvestmentProfilePage } from './investment-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvestmentProfilePageRoutingModule
  ],
  declarations: [InvestmentProfilePage]
})
export class InvestmentProfilePageModule {}
