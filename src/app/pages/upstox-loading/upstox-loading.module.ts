import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpstoxLoadingPageRoutingModule } from './upstox-loading-routing.module';

import { UpstoxLoadingPage } from './upstox-loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpstoxLoadingPageRoutingModule
  ],
  declarations: [UpstoxLoadingPage]
})
export class UpstoxLoadingPageModule {}
