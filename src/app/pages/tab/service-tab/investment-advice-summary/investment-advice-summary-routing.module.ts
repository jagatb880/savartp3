import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentAdviceSummaryPage } from './investment-advice-summary.page';

const routes: Routes = [
  {
    path: '',
    component: InvestmentAdviceSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentAdviceSummaryPageRoutingModule {}
