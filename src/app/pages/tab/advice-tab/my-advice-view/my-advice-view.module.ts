import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAdviceViewPageRoutingModule } from './my-advice-view-routing.module';

import { MyAdviceViewPage } from './my-advice-view.page';
import { GuidelineHeaderComponentModule } from 'src/app/components/guideline-header/guideline-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidelineHeaderComponentModule,
    MyAdviceViewPageRoutingModule
  ],
  declarations: [MyAdviceViewPage]
})
export class MyAdviceViewPageModule {}
