import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResearchRequestPageRoutingModule } from './research-request-routing.module';

import { ResearchRequestPage } from './research-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ResearchRequestPageRoutingModule
  ],
  declarations: [ResearchRequestPage]
})
export class ResearchRequestPageModule {}
