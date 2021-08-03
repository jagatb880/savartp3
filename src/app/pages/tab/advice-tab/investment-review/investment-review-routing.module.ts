import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentReviewPage } from './investment-review.page';

const routes: Routes = [
  {
    path: '',
    component: InvestmentReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentReviewPageRoutingModule {}
