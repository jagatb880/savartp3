import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.page.html',
  styleUrls: ['./company-information.page.scss'],
})
export class CompanyInformationPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
