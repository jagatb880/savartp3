import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvicePortfolioReviewGuidelinesPage } from './advice-portfolio-review-guidelines.page';

const routes: Routes = [
  {
    path: '',
    component: AdvicePortfolioReviewGuidelinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvicePortfolioReviewGuidelinesPageRoutingModule {}
