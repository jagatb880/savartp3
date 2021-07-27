import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-investment-advice',
  templateUrl: './filter-investment-advice.component.html',
  styleUrls: ['./filter-investment-advice.component.scss'],
})
export class FilterInvestmentAdviceComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  backBtn(){
    this.modalCtrl.dismiss()
  }
}
