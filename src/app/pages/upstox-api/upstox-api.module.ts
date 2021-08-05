import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpstoxApiPageRoutingModule } from './upstox-api-routing.module';

import { UpstoxApiPage } from './upstox-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpstoxApiPageRoutingModule
  ],
  declarations: [UpstoxApiPage]
})
export class UpstoxApiPageModule {}
