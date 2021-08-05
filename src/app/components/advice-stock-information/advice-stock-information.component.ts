import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-advice-stock-information',
  templateUrl: './advice-stock-information.component.html',
  styleUrls: ['./advice-stock-information.component.scss'],
})
export class AdviceStockInformationComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  closemodal(){
    this.modalCtrl.dismiss()
  }
}
