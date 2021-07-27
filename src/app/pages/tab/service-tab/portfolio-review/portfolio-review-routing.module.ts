import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioReviewPage } from './portfolio-review.page';

const routes: Routes = [
  {
    path: '',
    component: PortfolioReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioReviewPageRoutingModule {}
