import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveSubscriptionPage } from './active-subscription.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveSubscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveSubscriptionPageRoutingModule {}
