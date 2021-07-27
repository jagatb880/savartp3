import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-demat-account',
  templateUrl: './demat-account.component.html',
  styleUrls: ['./demat-account.component.scss'],
})
export class DematAccountComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  backBtn(){
    this.modalCtrl.dismiss()
  }
}
