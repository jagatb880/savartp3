import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAdvicePage } from './my-advice.page';

const routes: Routes = [
  {
    path: '',
    component: MyAdvicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAdvicePageRoutingModule {}
