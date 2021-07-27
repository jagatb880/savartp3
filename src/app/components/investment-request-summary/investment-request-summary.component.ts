import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-investment-request-summary',
  templateUrl: './investment-request-summary.component.html',
  styleUrls: ['./investment-request-summary.component.scss'],
})
export class InvestmentRequestSummaryComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  backBtn(){
    this.modalCtrl.dismiss()
  }
}
