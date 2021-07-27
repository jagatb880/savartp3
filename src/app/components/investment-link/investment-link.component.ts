import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-investment-link',
  templateUrl: './investment-link.component.html',
  styleUrls: ['./investment-link.component.scss'],
})
export class InvestmentLinkComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  closemodal(){
    this.modalCtrl.dismiss()
  }
}
