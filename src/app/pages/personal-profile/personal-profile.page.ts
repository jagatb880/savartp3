import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.page.html',
  styleUrls: ['./personal-profile.page.scss'],
})
export class PersonalProfilePage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
