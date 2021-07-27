import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentBlacklistPage } from './investment-blacklist.page';

const routes: Routes = [
  {
    path: '',
    component: InvestmentBlacklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentBlacklistPageRoutingModule {}
