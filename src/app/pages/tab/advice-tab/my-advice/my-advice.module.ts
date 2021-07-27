import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAdvicePageRoutingModule } from './my-advice-routing.module';

import { MyAdvicePage } from './my-advice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAdvicePageRoutingModule
  ],
  declarations: [MyAdvicePage]
})
export class MyAdvicePageModule {}
