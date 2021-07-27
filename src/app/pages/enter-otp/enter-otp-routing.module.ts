import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterOtpPage } from './enter-otp.page';

const routes: Routes = [
  {
    path: '',
    component: EnterOtpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterOtpPageRoutingModule {}
