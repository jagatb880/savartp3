import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DematAccountComponent } from 'src/app/components/demat-account/demat-account.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async opendemat()
  {
    const modal = await this.modalCtrl.create({
     component: DematAccountComponent,
     cssClass: 'demat-modal-class',
   });
   return await modal.present();
  }
}
