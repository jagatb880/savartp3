import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-service-request-successful',
  templateUrl: './service-request-successful.page.html',
  styleUrls: ['./service-request-successful.page.scss'],
})
export class ServiceRequestSuccessfulPage implements OnInit {

  constructor(private location: Location,private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToDashboard(){
    this.navCtrl.navigateRoot(['tab/tab/service'])
  }

  backBtn(){
    this.location.back();
  }
}
