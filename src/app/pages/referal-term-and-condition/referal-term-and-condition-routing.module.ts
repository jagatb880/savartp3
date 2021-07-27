import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferalTermAndConditionPage } from './referal-term-and-condition.page';

const routes: Routes = [
  {
    path: '',
    component: ReferalTermAndConditionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferalTermAndConditionPageRoutingModule {}
