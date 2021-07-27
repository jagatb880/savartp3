import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentAdvicePage } from './investment-advice.page';

const routes: Routes = [
  {
    path: '',
    component: InvestmentAdvicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentAdvicePageRoutingModule {}
