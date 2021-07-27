import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResearchRequestInvestmentdescriptionPage } from './research-request-investmentdescription.page';

const routes: Routes = [
  {
    path: '',
    component: ResearchRequestInvestmentdescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchRequestInvestmentdescriptionPageRoutingModule {}
