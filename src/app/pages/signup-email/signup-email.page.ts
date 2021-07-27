import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signup-email',
  templateUrl: './signup-email.page.html',
  styleUrls: ['./signup-email.page.scss'],
})
export class SignupEmailPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }

}
