import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoalManagerPage } from './goal-manager.page';

const routes: Routes = [
  {
    path: '',
    component: GoalManagerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoalManagerPageRoutingModule {}
