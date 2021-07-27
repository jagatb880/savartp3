import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdviceInvestmentAdvicePage } from './advice-investment-advice.page';

const routes: Routes = [
  {
    path: '',
    component: AdviceInvestmentAdvicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdviceInvestmentAdvicePageRoutingModule {}
