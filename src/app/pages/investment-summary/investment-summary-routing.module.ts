import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentSummaryPage } from './investment-summary.page';

const routes: Routes = [
  {
    path: '',
    component: InvestmentSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentSummaryPageRoutingModule {}
