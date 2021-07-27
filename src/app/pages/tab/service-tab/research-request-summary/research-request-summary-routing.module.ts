import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResearchRequestSummaryPage } from './research-request-summary.page';

const routes: Routes = [
  {
    path: '',
    component: ResearchRequestSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchRequestSummaryPageRoutingModule {}
