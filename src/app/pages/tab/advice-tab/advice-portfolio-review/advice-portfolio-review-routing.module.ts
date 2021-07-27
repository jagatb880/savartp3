import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvicePortfolioReviewPage } from './advice-portfolio-review.page';

const routes: Routes = [
  {
    path: '',
    component: AdvicePortfolioReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvicePortfolioReviewPageRoutingModule {}
