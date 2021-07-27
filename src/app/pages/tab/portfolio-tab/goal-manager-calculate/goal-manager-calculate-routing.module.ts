import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalManagerCalculatePage } from './goal-manager-calculate.page';

const routes: Routes = [
  {
    path: '',
    component: GoalManagerCalculatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalManagerCalculatePageRoutingModule {}
