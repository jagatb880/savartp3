import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-refer-and-earn',
  templateUrl: './refer-and-earn.page.html',
  styleUrls: ['./refer-and-earn.page.scss'],
})
export class ReferAndEarnPage implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
