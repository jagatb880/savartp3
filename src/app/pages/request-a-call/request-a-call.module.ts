import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestACallPageRoutingModule } from './request-a-call-routing.module';

import { RequestACallPage } from './request-a-call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RequestACallPageRoutingModule
  ],
  declarations: [RequestACallPage]
})
export class RequestACallPageModule {}
