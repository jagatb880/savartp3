import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavController, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NetworkService } from 'src/app/services/network.service';
import { Messages } from '../../services/constants/message'
import { CommonService } from 'src/app/services/common.service';
import { OnboadingService } from 'src/app/services/onboarding/onboading.service';
import { SharedService } from 'src/app/services/shared/shared.service';
@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.page.html',
  styleUrls: ['./set-password.page.scss'],
})
export class SetPasswordPage implements OnInit {
  passwordset: FormGroup;
  passwordToggleIcon = 'assets/icon/eye.png';
  passwordToggleIcons = 'eye-outline';
  passwordCToggleIcon = 'assets/icon/eye.png';
  passwordCToggleIcons = 'eye-outline';
  showPassword = false;
  showCPassword = false;
  password: any;
  confirmpassword: any;
  data: {
    // "customer_id":this.customerId,
    password: any;
  };
  authToken: any;
  constructor(private location: Location,private networkSvc: NetworkService,private navCtrl: NavController,public createpassword: FormBuilder,private commonSvc: CommonService,
    private onboardingSvc: OnboadingService, private sharedSvc: SharedService, private menuCtrl: MenuController) {
    this.passwordset = this.createpassword.group({
      password: ['', [Validators.required]],
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

  // onSubmit(){
  //   this.navCtrl.navigateForward(['/tab/tab/service'])
  // }
  onSubmit(){
    // this.navCtrl.navigateForward(['forgot-password'])
    // console.log(this.passwordset.value.password)
    if(this.networkSvc.online){
      // this.commonSvc.showLoader('');
      // let enteredOtp: string;
      // enteredOtp = this.getOtpValue()
      // this.data.otp = enteredOtp;
      this.data ={
        // "customer_id":this.customerId,
        "password":this.passwordset.value.password

      }
      console.log(this.data);
      this.commonSvc.getTokenToStorage("authtoken").then(authToken=>{
        console.log(authToken.token);
        this.onboardingSvc.createPassword(this.data,authToken.token).subscribe(response=>{
          console.log(response);
          switch (response.statusCode) {
            case 0:
              this.commonSvc.showMessage(response.data)
              this.navCtrl.navigateRoot(['tab/tab/portfolio'])
              break;
            case 1:
              this.commonSvc.showMessage("Internal server error")
              break;
            case 2:
              this.commonSvc.showMessage("Entered otp is invalid.")
              break;
            case 3:
              this.commonSvc.showMessage("Entered otp is expired")
              break;
          }
        })
      })
      
    }else{
      this.commonSvc.showMessage(Messages.CHECK_INERNET_CONNECTION)
    }
  }
}
