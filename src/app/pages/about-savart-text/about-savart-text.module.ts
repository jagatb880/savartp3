import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutSavartTextPageRoutingModule } from './about-savart-text-routing.module';

import { AboutSavartTextPage } from './about-savart-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutSavartTextPageRoutingModule
  ],
  declarations: [AboutSavartTextPage]
})
export class AboutSavartTextPageModule {}
