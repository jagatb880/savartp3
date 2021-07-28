import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [
    {
      path: 'community',
      loadChildren: () => import('./community-tab/community/community.module').then( m => m.CommunityPageModule)
    },
    {
      path: 'myadvice',
      loadChildren: () => import('./advice-tab/my-advice/my-advice.module').then( m => m.MyAdvicePageModule)
    },
    {
      path: 'notification',
      loadChildren: () => import('./notification-tab/notification/notification.module').then( m => m.NotificationPageModule)
    },
    {
      path: 'portfolio',
      loadChildren: () => import('./portfolio-tab/portfolio/portfolio.module').then( m => m.PortfolioPageModule)
    },
    {
      path: 'profile',
      loadChildren: () => import('./profile-tab/profile/profile.module').then( m => m.ProfilePageModule)
    },
    {
      path: 'service',
      loadChildren: () => import('./service-tab/service/service.module').then( m => m.ServicePageModule)
    },
    {
      path: '',
      redirectTo: '/tab/portfolio',
      pathMatch: 'full'
    },
  ]
  },
  {
    path: '',
    redirectTo: '/tab/tab/portfolio',
    pathMatch: 'full'
  },
  {
    path: 'investment-advice',
    loadChildren: () => import('./service-tab/investment-advice/investment-advice.module').then( m => m.InvestmentAdvicePageModule)
  },
  {
    path: 'investment-advice-summary',
    loadChildren: () => import('./service-tab/investment-advice-summary/investment-advice-summary.module').then( m => m.InvestmentAdviceSummaryPageModule)
  },
  {
    path: 'portfolio-review',
    loadChildren: () => import('./service-tab/portfolio-review/portfolio-review.module').then( m => m.PortfolioReviewPageModule)
  },
  {
    path: 'research-request',
    loadChildren: () => import('./service-tab/research-request/research-request.module').then( m => m.ResearchRequestPageModule)
  },
  {
    path: 'research-request-summary',
    loadChildren: () => import('./service-tab/research-request-summary/research-request-summary.module').then( m => m.ResearchRequestSummaryPageModule)
  },
  {
    path: 'research-request-investmentdescription',
    loadChildren: () => import('./service-tab/research-request-investmentdescription/research-request-investmentdescription.module').then( m => m.ResearchRequestInvestmentdescriptionPageModule)
  },
  // {
  //   path: 'investment-guidelines',
  //   loadChildren: () => import('./service-tab/investment-guidelines/investment-guidelines.module').then( m => m.InvestmentGuidelinesPageModule)
  // },
  {
    path: 'service-request-successful',
    loadChildren: () => import('./service-tab/service-request-successful/service-request-successful.module').then( m => m.ServiceRequestSuccessfulPageModule)
  },
  // {
  //   path: 'company-information',
  //   loadChildren: () => import('./service-tab/company-information/company-information.module').then( m => m.CompanyInformationPageModule)
  // },
  {
    path: 'advice-portfolio-review',
    loadChildren: () => import('./advice-tab/advice-portfolio-review/advice-portfolio-review.module').then( m => m.AdvicePortfolioReviewPageModule)
  },
  {
    path: 'advice-portfolio-review-guidelines',
    loadChildren: () => import('./advice-tab/advice-portfolio-review-guidelines/advice-portfolio-review-guidelines.module').then( m => m.AdvicePortfolioReviewGuidelinesPageModule)
  },
  {
    path: 'advice-investment-advice',
    loadChildren: () => import('./advice-tab/advice-investment-advice/advice-investment-advice.module').then( m => m.AdviceInvestmentAdvicePageModule)
  },
  {
    path: 'investment-guideline',
    loadChildren: () => import('./advice-tab/investment-guideline/investment-guideline.module').then( m => m.InvestmentGuidelinePageModule)
  },
  {
    path: 'company-information',
    loadChildren: () => import('./advice-tab/company-information/company-information.module').then( m => m.CompanyInformationPageModule)
  },
  {
    path: 'goal-manager',
    loadChildren: () => import('./portfolio-tab/goal-manager/goal-manager.module').then( m => m.GoalManagerPageModule)
  },
  {
    path: 'goal-manager-calculate',
    loadChildren: () => import('./portfolio-tab/goal-manager-calculate/goal-manager-calculate.module').then( m => m.GoalManagerCalculatePageModule)
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile-tab/profile/profile.module').then( m => m.ProfilePageModule)
  // },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
