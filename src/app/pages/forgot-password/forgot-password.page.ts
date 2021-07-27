import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, MenuController } from '@ionic/angular';
import { NetworkService } from 'src/app/services/network.service';
import { Messages } from '../../services/constants/message'
import { CommonService } from 'src/app/services/common.service';
import { OnboadingService } from 'src/app/services/onboarding/onboading.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  countryObj: any;
  loginForm: FormGroup;
  userForm: any;
  objects: any
  searchText: string;
  datas:any
  showAutoComplete: boolean;
  errorStatus: boolean;
  errorMsg: string;
  constructor(private location: Location, private navCtrl: NavController,private networkSvc: NetworkService, private commonSvc: CommonService,
    private onboardingSvc: OnboadingService, private sharedSvc: SharedService,private menuCtrl: MenuController,
    public fb: FormBuilder) { 
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      custregmobile: ["", Validators.compose([Validators.required, Validators.minLength(10),Validators.maxLength(10)])],
      custcountrycode: ["+91", Validators.required],
      searchText: [""]
    });
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  onValueChanged(data){
    console.log(data)
    if(data.custregmobile.length == 0){
      this.errorStatus = false;
    }else if(data.custregmobile.length == 10){
      this.errorStatus = false;
    }else{
      this.errorMsg = ''
      this.errorStatus = true;
    }
  }

  ngOnInit() {
    this.errorStatus = false;
    this.showAutoComplete = false;
    this.errorMsg = ''
    this.datas = []
    this.userForm = new FormGroup({
      country: new FormControl('', Validators.required)
   });
   this.loginForm.value.searchText = "";
   this.getCountryCode();
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeGesture(false)
  }

  ionViewDidLeave() {
    this.menuCtrl.swipeGesture(true)
  }

  backBtn(){
    this.location.back();
  }

  getCountryCode(){
    this.sharedSvc.getCountryCodeDetails().subscribe(response=>{
      console.log(response)
      if(response.statusCode == 0){
        this.countryObj = response.data;
      }
    })
  }

  sendOtp(){
    if(this.networkSvc.online){
      if(!this.loginForm.value.custregmobile){
        this.errorMsg = 'Please enter the mobile number'
        this.errorStatus = true
      }else{
        this.errorStatus = false
        this.commonSvc.showLoader("Please wait...")
        let data= {
          "custregmobile":this.loginForm.value.custregmobile,
          "custcountrycode":"91"
        }
        this.onboardingSvc.sendOtpForRegisteration(data).subscribe(response=>{
          console.log(response)
          this.commonSvc.dismissLoader();
          switch (response.statusCode) {
          case 0:
            this.commonSvc.showMessage(response.data)
            this.navCtrl.navigateForward(['enter-otp',{type: 'forgotpassword'}],{state: data},)
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
      }
    }else{
      this.commonSvc.showMessage(Messages.CHECK_INERNET_CONNECTION)
    }
  }

  openSearcBox(){
    if(!this.showAutoComplete)
    this.showAutoComplete = true;
    else
    this.showAutoComplete = false;
  }

  search(){
    if (this.searchText == '') { this.datas = [] }else{
    let data = this.countryObj
    this.datas = data.filter(item => item.locname.toLowerCase().startsWith(this.loginForm.value.searchText.toLowerCase()) )
    }
  }

  selectCountryCode(data){
    this.showAutoComplete = false;
    this.loginForm.controls.searchText.setValue("");
    this.datas = []
    this.loginForm.controls.custcountrycode.setValue("+"+data);
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9.,]/;
    let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(inputChar)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

}
