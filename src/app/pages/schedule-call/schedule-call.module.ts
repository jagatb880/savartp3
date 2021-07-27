import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleCallPageRoutingModule } from './schedule-call-routing.module';

import { ScheduleCallPage } from './schedule-call.page';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    ScheduleCallPageRoutingModule
  ],
  declarations: [ScheduleCallPage]
})
export class ScheduleCallPageModule {}
