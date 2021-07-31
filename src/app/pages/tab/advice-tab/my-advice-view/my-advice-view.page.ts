import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-advice-view',
  templateUrl: './my-advice-view.page.html',
  styleUrls: ['./my-advice-view.page.scss'],
})
export class MyAdviceViewPage implements OnInit {

  savingTypes: any[];
  constructor() { }

  ngOnInit() {
    this.savingTypes = ["a","b","c"]
  }

}
