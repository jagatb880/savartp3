import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {
  data: { title: string; subtitle: string; }[];

  constructor(private location: Location,) { 
    this.data = [{'title':'Wide Coverage','subtitle':'Stock, Mutual Funds, IPO, Gold & Bonds'},
    {'title':'Global Advice','subtitle':'India, U.S.A. & Canada'},
    {'title':'Personalised Guidance','subtitle':'Based on your goals and risk profile'}]
  }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
