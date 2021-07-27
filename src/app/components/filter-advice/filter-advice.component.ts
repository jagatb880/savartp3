import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-advice',
  templateUrl: './filter-advice.component.html',
  styleUrls: ['./filter-advice.component.scss'],
})
export class FilterAdviceComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  backBtn(){
    this.modalCtrl.dismiss()
  }

}
