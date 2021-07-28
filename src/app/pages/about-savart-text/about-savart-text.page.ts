import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about-savart-text',
  templateUrl: './about-savart-text.page.html',
  styleUrls: ['./about-savart-text.page.scss'],
})
export class AboutSavartTextPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
