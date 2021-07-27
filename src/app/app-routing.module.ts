import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/authguard.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'tab',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'enter-otp',
    loadChildren: () => import('./pages/enter-otp/enter-otp.module').then( m => m.EnterOtpPageModule)
  },
  {
    path: 'create-password',
    loadChildren: () => import('./pages/create-password/create-password.module').then( m => m.CreatePasswordPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  // {
  //   path: 'gobacktodashboard',
  //   loadChildren: () => import('./pages/gobacktodashboard/gobacktodashboard.module').then( m => m.GobacktodashboardPageModule)
  // },
  // {
  //   path: 'portfolio',
  //   loadChildren: () => import('./pages/tab/portfolio/portfolio.module').then( m => m.PortfolioPageModule)
  // },
  // {
  //   path: 'myadvice',
  //   loadChildren: () => import('./pages/tab/myadvice/myadvice.module').then( m => m.MyadvicePageModule)
  // },
  // {
  //   path: 'service',
  //   loadChildren: () => import('./pages/tab/service/service.module').then( m => m.ServicePageModule)
  // },
  // {
  //   path: 'community',
  //   loadChildren: () => import('./pages/tab/community/community.module').then( m => m.CommunityPageModule)
  // },
  // {
  //   path: 'notification',
  //   loadChildren: () => import('./pages/tab/notification/notification.module').then( m => m.NotificationPageModule)
  // },
  {
    path: 'set-password',
    loadChildren: () => import('./pages/set-password/set-password.module').then( m => m.SetPasswordPageModule)
  },
  {
    path: 'tab',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'personal-profile',
    loadChildren: () => import('./pages/personal-profile/personal-profile.module').then( m => m.PersonalProfilePageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'investment-profile',
    loadChildren: () => import('./pages/investment-profile/investment-profile.module').then( m => m.InvestmentProfilePageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'help-center',
    loadChildren: () => import('./pages/help-center/help-center.module').then( m => m.HelpCenterPageModule)
  },
  {
    path: 'about-savart',
    loadChildren: () => import('./pages/about-savart/about-savart.module').then( m => m.AboutSavartPageModule)
  },
  {
    path: 'email-us',
    loadChildren: () => import('./pages/email-us/email-us.module').then( m => m.EmailUsPageModule)
  },
  {
    path: 'term-and-condition',
    loadChildren: () => import('./pages/term-and-condition/term-and-condition.module').then( m => m.TermAndConditionPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'schedule-call',
    loadChildren: () => import('./pages/schedule-call/schedule-call.module').then( m => m.ScheduleCallPageModule)
  },
  {
    path: 'signup-email',
    loadChildren: () => import('./pages/signup-email/signup-email.module').then( m => m.SignupEmailPageModule)
  },
  {
    path: 'investment-blacklist',
    loadChildren: () => import('./pages/investment-blacklist/investment-blacklist.module').then( m => m.InvestmentBlacklistPageModule)
  },
  {
    path: 'investment-blacklist-text',
    loadChildren: () => import('./pages/investment-blacklist-text/investment-blacklist-text.module').then( m => m.InvestmentBlacklistTextPageModule)
  },
  {
    path: 'subscribe',
    loadChildren: () => import('./pages/subscribe/subscribe.module').then( m => m.SubscribePageModule)
  },
  {
    path: 'signature',
    loadChildren: () => import('./pages/signature/signature.module').then( m => m.SignaturePageModule)
  },
  {
    path: 'investment-summary',
    loadChildren: () => import('./pages/investment-summary/investment-summary.module').then( m => m.InvestmentSummaryPageModule)
  },
  {
    path: 'refer-and-earn',
    loadChildren: () => import('./pages/refer-and-earn/refer-and-earn.module').then( m => m.ReferAndEarnPageModule)
  },
  {
    path: 'referal-bank-details',
    loadChildren: () => import('./pages/referal-bank-details/referal-bank-details.module').then( m => m.ReferalBankDetailsPageModule)
  },
  {
    path: 'invest-request-details-submitted',
    loadChildren: () => import('./pages/invest-request-details-submitted/invest-request-details-submitted.module').then( m => m.InvestRequestDetailsSubmittedPageModule)
  },
  {
    path: 'referal-term-and-condition',
    loadChildren: () => import('./pages/referal-term-and-condition/referal-term-and-condition.module').then( m => m.ReferalTermAndConditionPageModule)
  },
  {
    path: 'savart-community-guidelines',
    loadChildren: () => import('./pages/savart-community-guidelines/savart-community-guidelines.module').then( m => m.SavartCommunityGuidelinesPageModule)
  },
  {
    path: 'request-a-call',
    loadChildren: () => import('./pages/request-a-call/request-a-call.module').then( m => m.RequestACallPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
