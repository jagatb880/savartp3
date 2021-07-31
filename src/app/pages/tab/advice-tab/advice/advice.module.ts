import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvicePageRoutingModule } from './advice-routing.module';

import { AdvicePage } from './advice.page';
import { GuidelineHeaderComponentModule } from 'src/app/components/guideline-header/guideline-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuidelineHeaderComponentModule,
    AdvicePageRoutingModule
  ],
  declarations: [AdvicePage]
})
export class AdvicePageModule {}
