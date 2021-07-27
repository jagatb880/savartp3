import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavartCommunityGuidelinesPage } from './savart-community-guidelines.page';

const routes: Routes = [
  {
    path: '',
    component: SavartCommunityGuidelinesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavartCommunityGuidelinesPageRoutingModule {}
