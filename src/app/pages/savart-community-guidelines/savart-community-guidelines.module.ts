import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavartCommunityGuidelinesPageRoutingModule } from './savart-community-guidelines-routing.module';

import { SavartCommunityGuidelinesPage } from './savart-community-guidelines.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavartCommunityGuidelinesPageRoutingModule
  ],
  declarations: [SavartCommunityGuidelinesPage]
})
export class SavartCommunityGuidelinesPageModule {}
