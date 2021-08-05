import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-active-subscription',
  templateUrl: './active-subscription.page.html',
  styleUrls: ['./active-subscription.page.scss'],
})
export class ActiveSubscriptionPage implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
