import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-savart',
  templateUrl: './about-savart.page.html',
  styleUrls: ['./about-savart.page.scss'],
})
export class AboutSavartPage implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
