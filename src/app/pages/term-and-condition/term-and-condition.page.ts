import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-term-and-condition',
  templateUrl: './term-and-condition.page.html',
  styleUrls: ['./term-and-condition.page.scss'],
})
export class TermAndConditionPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
