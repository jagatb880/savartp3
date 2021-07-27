import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';
import { SharedService } from './shared/shared.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CommonService {


  public isLoading = false;
  public authToken: string;
  researchRequetoObj = [];
  portfolioReviewObj = [];
  constructor(private storage: Storage,private alertCtrl: AlertController, private location: Location, private loadingCtrl: LoadingController,
    private toastCtrl: ToastController, private sharedSvc: SharedService) {}

  async showMessage(msg: string): Promise < void > {
    const message = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    await message.present();
  }

  async showAlert(header: string, msg: string, buttons: Array < any > = ['OK']): Promise < void > {
    const alert = await this.alertCtrl.create({
      header,
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      message: msg,
      buttons,
    });
    return await alert.present();
  }

  showAlertCallBack(title: string, message: string, okBtn: string = 'OK', cancelBtn? : string): Promise < boolean > {
    const promise: Promise < boolean > = new Promise(async (resolve, reject) => {
      const confirm = await this.alertCtrl.create({
        header: title,
        message,
        cssClass: 'my-custom-class',
        backdropDismiss: false,
        buttons: [{
            text: cancelBtn,
            role: 'cancel',
            handler: () => {
              resolve(false);
            }
          },
          {
            text: okBtn,
            handler: () => {
              resolve(true);
            }
          }
        ]
      });
      confirm.present();
    });
    return promise;
  }

  async showLoader(message) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      spinner: 'circles',
      message,
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then();
        }
      });
    });
  }

  async dismissLoader() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => (''));
  }

  getCountryCode(){
    let promise = new Promise < any > ((resolve, reject) => {  
      this.sharedSvc.getCountryCodeDetails().subscribe(response=>{
        console.log(response)
        if(response.statusCode == 0){
          resolve(response.data);
        }
      })
    });
    return promise
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  setTokenToStorage(key,value){
    let promise = new Promise < any > ((resolve, reject) => {  
      this.storage.set(key,value).then(data=>{
        resolve(data)
        console.log(key)
      })
    });
    return promise
  }

  getTokenToStorage(key){
    let promise = new Promise < any > ((resolve, reject) => {  
      this.storage.get(key).then(data=>{
        resolve(data)
      })
    });
    return promise
  }

  getUser(){
    let promise = new Promise < boolean > ((resolve, reject) => {
      this.getTokenToStorage("authtoken").then(data=>{
        if(data && data.token){
          resolve(true)
        }else{
          resolve(false)
        }
      }).catch(error=>{
        reject(false)
      })
    });
    return promise
  }
}
