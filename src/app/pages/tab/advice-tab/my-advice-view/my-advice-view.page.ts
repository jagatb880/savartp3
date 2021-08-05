import { Component, OnInit } from '@angular/core';
import { AdviceStockInformationComponent } from 'src/app/components/advice-stock-information/advice-stock-information.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-advice-view',
  templateUrl: './my-advice-view.page.html',
  styleUrls: ['./my-advice-view.page.scss'],
})
export class MyAdviceViewPage implements OnInit {

  savingTypes: any[];
  constructor(private modalCtrl: ModalController,) { }

  ngOnInit() {
    this.savingTypes = ["a","b","c"]
  }
  async stock(event: any) {
    const popover = await this.modalCtrl.create({
      component: AdviceStockInformationComponent,
      cssClass: 'advice-stock-modal-class',
    });
    return await popover.present();
  }
}
