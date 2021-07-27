import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Network } from '@ionic-native/network/ngx';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { FilterAdviceComponent } from './components/filter-advice/filter-advice.component';
import { FilterInvestmentAdviceComponent } from './components/filter-investment-advice/filter-investment-advice.component';
import { InvestmentRequestSummaryComponent } from './components/investment-request-summary/investment-request-summary.component';
import { PortfolioRequestSummaryComponent } from './components/portfolio-request-summary/portfolio-request-summary.component';
import { GoalManagermodalComponent } from './components/goal-managermodal/goal-managermodal.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ResearchRequestSummaryComponent } from './components/research-request-summary/research-request-summary.component';
import { DatePipe } from '@angular/common';
import { PortfolioReviewSummaryComponent } from './components/portfolio-review-summary/portfolio-review-summary.component';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { DematAccountComponent } from './components/demat-account/demat-account.component';
import { NgCalendarModule  } from 'ionic2-calendar';
import { BankDetailsComponent } from './components/bank-details/bank-details.component';
import { InvestmentLinkComponent } from './components/investment-link/investment-link.component';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';


@NgModule({
  declarations: [AppComponent, FilterAdviceComponent, FilterInvestmentAdviceComponent, InvestmentRequestSummaryComponent, 
    PortfolioRequestSummaryComponent, GoalManagermodalComponent, ResearchRequestSummaryComponent,InvestmentLinkComponent, 
    PortfolioReviewSummaryComponent,DematAccountComponent,BankDetailsComponent],
  entryComponents: [FilterAdviceComponent, FilterInvestmentAdviceComponent, InvestmentRequestSummaryComponent,InvestmentLinkComponent, 
    PortfolioRequestSummaryComponent, GoalManagermodalComponent, ResearchRequestSummaryComponent, 
    PortfolioReviewSummaryComponent,DematAccountComponent,BankDetailsComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__myCrewMobile',
      driverOrder: ['indexeddb', 'websql', 'localstorage']
    }),
    HttpClientModule,
    NgCalendarModule,
    AppRoutingModule
  ],
  providers: [
    Network,
    Base64ToGallery,
    StatusBar,
    SplashScreen,
    DatePipe,
    AutoCompleteModule,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}