import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutSavartPage } from './about-savart.page';

const routes: Routes = [
  {
    path: '',
    component: AboutSavartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutSavartPageRoutingModule {}
