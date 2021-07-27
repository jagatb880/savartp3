import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Storage } from '@ionic/storage';
import { NetworkService } from 'src/app/services/network.service';
import { Messages } from '../../services/constants/message'
import { CommonService } from 'src/app/services/common.service';
import { OnboadingService } from 'src/app/services/onboarding/onboading.service';
import { SharedService } from 'src/app/services/shared/shared.service';
@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.page.html',
  styleUrls: ['./create-password.page.scss'],
})
export class CreatePasswordPage implements OnInit {
  passwordset: FormGroup;
  passwordToggleIcon = 'assets/icon/eye.png';
  passwordToggleIcons = 'eye-outline';
  passwordCToggleIcon = 'assets/icon/eye.png';
  passwordCToggleIcons = 'eye-outline';
  showPassword = false;
  showCPassword = false;
  password: any;
  confirmpassword: any;
  customerId: any;
  data: {};
  constructor(private location: Location, private navCtrl: NavController,public createpassword: FormBuilder,
    private storage: Storage,private networkSvc: NetworkService, private commonSvc: CommonService,
    private onboardingSvc: OnboadingService, private sharedSvc: SharedService,
    private menuCtrl: MenuController) {
    this.passwordset = this.createpassword.group({
      password: ['', [Validators.minLength(8),Validators.maxLength(16)]],
      conformpassword: ['',[Validators.required]]
    },{
      validators: this.checkPasswords
    }
    );
   }
checkPasswords( passwordset: FormGroup) { // here we have the 'passwords' group
  const password = passwordset.get('password').value;
  const conformpassword = passwordset.get('conformpassword').value;

  return password === conformpassword ? null : { notSame: true }     
}
  ngOnInit() {
  }

  backBtn(){
    this.location.back();
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeGesture(false)
  }

  ionViewDidLeave() {
    this.menuCtrl.swipeGesture(true)
  }

  toggleNewPassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon === 'assets/icon/eye.png') {
      this.passwordToggleIcon = 'assets/icon/closeeye.png';
    }else {
      this.passwordToggleIcon = 'assets/icon/eye.png';
    }
  }

  toggleCNewPassword() {
    this.showCPassword = !this.showCPassword;
    if (this.passwordCToggleIcon === 'assets/icon/eye.png') {
      this.passwordCToggleIcon = 'assets/icon/closeeye.png';
    }else {
      this.passwordCToggleIcon = 'assets/icon/eye.png';
    }
  }

  // savePassword(){
  //   if(this.password !==  this.confirmpassword)
  //   {
  //     alert('please enter correct password')
  //   }
  //   else
  //   {
  //     this.navCtrl.navigateForward(['forgot-password'])
  //   }
  // }
  onSubmit(){
    if(this.networkSvc.online){
      this.commonSvc.showLoader("Please wait...")
      this.data ={
        "password":this.passwordset.value.password
      }
      this.commonSvc.getTokenToStorage("authtoken").then(authToken=>{
        console.log(authToken.token);
        this.onboardingSvc.createPassword(this.data,authToken.token).subscribe(response=>{
        console.log(response);
        this.commonSvc.dismissLoader();
        switch (response.statusCode) {
          case 0:
            this.commonSvc.showMessage(response.data)
            this.navCtrl.navigateForward(['tab/tab/service'])
            break;
          case 1:
            this.commonSvc.showMessage("Internal server error")
            break;
          case 2:
            this.commonSvc.showMessage("Enter invalid otp.")
            break;
          case 3:
            this.commonSvc.showMessage("Entered otp is expired")
            break;
        }
      })
    });
    }else{
      this.commonSvc.showMessage(Messages.CHECK_INERNET_CONNECTION)
    }
  }
  authtoken(authtoken: any) {
    throw new Error('Method not implemented.');
  }

}
