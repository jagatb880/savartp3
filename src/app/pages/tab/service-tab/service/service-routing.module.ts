import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicePage } from './service.page';

const routes: Routes = [
  {
    path: '',
    component: ServicePage,
  
  // children: [
  //   {
  //     path: 'community',
  //     loadChildren: () => import('../../tab/community/community.module').then( m => m.CommunityPageModule)
  //   },
  //   {
  //     path: 'myadvice',
  //     loadChildren: () => import('../../tab/myadvice/myadvice.module').then( m => m.MyadvicePageModule)
  //   },
  //   {
  //     path: 'notification',
  //     loadChildren: () => import('../../tab/notification/notification.module').then( m => m.NotificationPageModule)
  //   },
  //   {
  //     path: 'portfolio',
  //     loadChildren: () => import('../../tab/portfolio/portfolio.module').then( m => m.PortfolioPageModule)
  //   },
  //   // {
  //   //   path: 'service',
  //   //   loadChildren: () => import('../../tab/service/service.module').then( m => m.ServicePageModule)
  //   // },
  //   {
  //     path: '',
  //     redirectTo: '/service',
  //     pathMatch: 'full'
  //   },
  // ]
},
// {
//   path: '',
//   redirectTo: '/service',
//   pathMatch: 'full'
// },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicePageRoutingModule {}
