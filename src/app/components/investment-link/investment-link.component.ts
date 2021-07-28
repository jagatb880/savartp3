import { Component, OnInit } from '@angular/core';
import { ModalController ,NavController} from '@ionic/angular';

@Component({
  selector: 'app-investment-link',
  templateUrl: './investment-link.component.html',
  styleUrls: ['./investment-link.component.scss'],
})
export class InvestmentLinkComponent implements OnInit {

  constructor(private modalCtrl: ModalController,private navCtrl: NavController,) { }

  ngOnInit() {}
  closemodal(){
    this.modalCtrl.dismiss()
  }
  linkwithsignature(){
    this.modalCtrl.dismiss()
      this.navCtrl.navigateRoot(['signature'])
    
  }
}
