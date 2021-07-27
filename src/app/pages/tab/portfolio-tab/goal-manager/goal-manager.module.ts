import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalManagerPageRoutingModule } from './goal-manager-routing.module';

import { GoalManagerPage } from './goal-manager.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoalManagerPageRoutingModule
  ],
  declarations: [GoalManagerPage]
})
export class GoalManagerPageModule {}
