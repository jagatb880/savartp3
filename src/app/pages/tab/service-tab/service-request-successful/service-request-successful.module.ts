import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceRequestSuccessfulPageRoutingModule } from './service-request-successful-routing.module';

import { ServiceRequestSuccessfulPage } from './service-request-successful.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceRequestSuccessfulPageRoutingModule
  ],
  declarations: [ServiceRequestSuccessfulPage]
})
export class ServiceRequestSuccessfulPageModule {}
