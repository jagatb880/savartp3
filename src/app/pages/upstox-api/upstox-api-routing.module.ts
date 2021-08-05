import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpstoxApiPage } from './upstox-api.page';

const routes: Routes = [
  {
    path: '',
    component: UpstoxApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpstoxApiPageRoutingModule {}
