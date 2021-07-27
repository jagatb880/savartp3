import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestACallPage } from './request-a-call.page';

const routes: Routes = [
  {
    path: '',
    component: RequestACallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestACallPageRoutingModule {}
