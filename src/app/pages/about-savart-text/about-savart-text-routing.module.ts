import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutSavartTextPage } from './about-savart-text.page';

const routes: Routes = [
  {
    path: '',
    component: AboutSavartTextPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutSavartTextPageRoutingModule {}
