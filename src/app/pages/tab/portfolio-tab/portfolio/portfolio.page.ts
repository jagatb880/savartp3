import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BankDetailsComponent } from 'src/app/components/bank-details/bank-details.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss']
})
export class PortfolioPage implements OnInit {
  getdata: { option: string; }[];
  modal: boolean;
  array: { id: string; }[];
  videoPlayStatus: boolean;
  savartBenefits: any[];
  
  constructor(private navCtrl: NavController,private modalCtrl: ModalController) { 
    this.getdata =[{option:'all'}]
    this.modal = false;
    this.array = [{id:'all'},{id:'all'},{id:'all'}]
  }

  ngOnInit() {
    this.videoPlayStatus = true;
    this.savartBenefits = [
      {
        "image":"../../../../../assets/icon/Group26632.svg",
        "div1":"Wide Coverage",
        "div2":"Stock, Mutual Funds, IPO, Gold & Bonda"
      },
      {
        "image":"../../../../../assets/icon/Group26633.svg",
        "div1":"Globe Advice",
        "div2":"India, U.S.A, Canada"
      },
      {
        "image":"../../../../../assets/icon/Group26632.svg",
        "div1":"Wide Coverage",
        "div2":"Stock, Mutual Funds, IPO, Gold & Bonda"
      },
      {
        "image":"../../../../../assets/icon/Group26633.svg",
        "div1":"Globe Advice",
        "div2":"India, U.S.A, Canada"
      }
    ]
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
  ionViewWillLeave() {
    let listaFrames = document.getElementsByTagName("iframe");
 
    for (var index = 0; index < listaFrames.length; index++) {
     let iframe = listaFrames[index].contentWindow;
     iframe.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
   }
 }

 onScroll(){
  if (this.isElementInViewport(document.getElementById('videoTag'))) {
      this.videoPlayStatus = false;
      // if(this.videoPlayStatus){
      //   let listaFrames = document.getElementsByTagName("iframe");
      //   for (var index = 0; index < listaFrames.length; index++) {
      //     let iframe = listaFrames[index].contentWindow;
      //     iframe.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      //   }
      // }
    }else{
      if(!this.videoPlayStatus){
        this.videoPlayStatus = true;
        let listaFrames = document.getElementsByTagName("iframe");
        for (var index = 0; index < listaFrames.length; index++) {
          let iframe = listaFrames[index].contentWindow;
          iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      }
    }
  }

  isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }
}
