import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResearchRequestPage } from './research-request.page';

const routes: Routes = [
  {
    path: '',
    component: ResearchRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResearchRequestPageRoutingModule {}
