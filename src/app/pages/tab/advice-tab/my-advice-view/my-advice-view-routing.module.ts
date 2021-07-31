import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAdviceViewPage } from './my-advice-view.page';

const routes: Routes = [
  {
    path: '',
    component: MyAdviceViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAdviceViewPageRoutingModule {}
