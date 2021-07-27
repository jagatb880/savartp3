import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-email-us',
  templateUrl: './email-us.page.html',
  styleUrls: ['./email-us.page.scss'],
})
export class EmailUsPage implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
