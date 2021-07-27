import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-portfolio-request-summary',
  templateUrl: './portfolio-request-summary.component.html',
  styleUrls: ['./portfolio-request-summary.component.scss'],
})
export class PortfolioRequestSummaryComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  backBtn(){
    this.modalCtrl.dismiss()
  }
}
