import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BankDetailsComponent } from 'src/app/components/bank-details/bank-details.component';
import { ModalController } from '@ionic/angular';
import { animate, style, transition, trigger, state } from '@angular/animations';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  animations: [
    // trigger('slideDownUp', [
    //   transition(':enter', [style({ height: 0 }), animate(500)]),
    //   transition(':leave', [animate(500, style({ height: 0 }))]),
    // ]),
    trigger('slideUpDown', [
      state('0', style({ 'max-height': '*', opacity: 1 })),
      state('1', style({ 'max-height': '0px', opacity: 0 })),
      transition(':enter', animate('400ms ease-in-out')),
      transition('* => *', animate('400ms ease-in-out')),
    ])
  ],
})
export class PortfolioPage implements OnInit {
  getdata: { option: string; }[];
  modal: boolean;
  array: { id: string; }[];

  constructor(private navCtrl: NavController,private modalCtrl: ModalController,) { 
    this.getdata =[{option:'all'}]
    this.modal = false;
    this.array = [{id:'all'},{id:'all'},{id:'all'}]
  }

  ngOnInit() {
  }

  async bankdetails(event: any) {
    const popover = await this.modalCtrl.create({
      component: BankDetailsComponent,
      cssClass: 'bankdetails-modal-class',
    });
    return await popover.present();
  }
  open(){
    this.modal = true;
  }

  close(){
    this.modal = false;
  }
  edit(){
    // this.navCtrl.navigateForward(['/tab/goal-manager'])
  }
}
