import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpstoxLoadingPage } from './upstox-loading.page';

const routes: Routes = [
  {
    path: '',
    component: UpstoxLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpstoxLoadingPageRoutingModule {}
