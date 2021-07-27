import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailUsPageRoutingModule } from './email-us-routing.module';

import { EmailUsPage } from './email-us.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailUsPageRoutingModule
  ],
  declarations: [EmailUsPage]
})
export class EmailUsPageModule {}
