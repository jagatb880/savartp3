import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferalBankDetailsPage } from './referal-bank-details.page';

const routes: Routes = [
  {
    path: '',
    component: ReferalBankDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReferalBankDetailsPageRoutingModule {}
