import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiceRequestSuccessfulPage } from './service-request-successful.page';

const routes: Routes = [
  {
    path: '',
    component: ServiceRequestSuccessfulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRequestSuccessfulPageRoutingModule {}
