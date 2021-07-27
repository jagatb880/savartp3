import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentBlacklistTextPage } from './investment-blacklist-text.page';

const routes: Routes = [
  {
    path: '',
    component: InvestmentBlacklistTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentBlacklistTextPageRoutingModule {}
