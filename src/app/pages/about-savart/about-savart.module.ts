import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutSavartPageRoutingModule } from './about-savart-routing.module';

import { AboutSavartPage } from './about-savart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutSavartPageRoutingModule
  ],
  declarations: [AboutSavartPage]
})
export class AboutSavartPageModule {}
