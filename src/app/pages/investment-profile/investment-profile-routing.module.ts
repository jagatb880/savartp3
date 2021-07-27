import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestmentProfilePage } from './investment-profile.page';

const routes: Routes = [
  {
    path: '',
    component: InvestmentProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvestmentProfilePageRoutingModule {}
