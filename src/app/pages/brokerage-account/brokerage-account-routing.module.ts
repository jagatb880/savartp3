import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrokerageAccountPage } from './brokerage-account.page';

const routes: Routes = [
  {
    path: '',
    component: BrokerageAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrokerageAccountPageRoutingModule {}
