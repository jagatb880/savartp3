import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentGuidelinePage } from './investment-guideline.page';

const routes: Routes = [
  {
    path: '',
    component: InvestmentGuidelinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentGuidelinePageRoutingModule {}
