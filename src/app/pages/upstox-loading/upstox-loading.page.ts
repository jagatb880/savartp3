import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-upstox-loading',
  templateUrl: './upstox-loading.page.html',
  styleUrls: ['./upstox-loading.page.scss'],
})
export class UpstoxLoadingPage implements OnInit {

  constructor(private navCrl: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.navCrl.navigateForward(['upstox-api'])
    }, 4000);
  }

}
