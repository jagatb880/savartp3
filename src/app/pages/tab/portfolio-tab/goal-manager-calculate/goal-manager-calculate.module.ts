import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalManagerCalculatePageRoutingModule } from './goal-manager-calculate-routing.module';

import { GoalManagerCalculatePage } from './goal-manager-calculate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalManagerCalculatePageRoutingModule
  ],
  declarations: [GoalManagerCalculatePage]
})
export class GoalManagerCalculatePageModule {}
