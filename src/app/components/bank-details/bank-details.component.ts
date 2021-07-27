import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss'],
})
export class BankDetailsComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  closemodal(){
    this.modalCtrl.dismiss()
  }
}
