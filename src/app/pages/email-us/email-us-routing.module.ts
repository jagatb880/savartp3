import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailUsPage } from './email-us.page';

const routes: Routes = [
  {
    path: '',
    component: EmailUsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailUsPageRoutingModule {}
