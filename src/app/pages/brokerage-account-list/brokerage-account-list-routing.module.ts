import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrokerageAccountListPage } from './brokerage-account-list.page';

const routes: Routes = [
  {
    path: '',
    component: BrokerageAccountListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrokerageAccountListPageRoutingModule {}
