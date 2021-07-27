import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {

  constructor(private location: Location,private router: Router) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
  changepassword(){
    this.router.navigate(['/change-password']);
  }
}
