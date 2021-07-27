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
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  
  loginForm: FormGroup;
  userForm: any;
  objects: any
  searchText: string;
  datas:any
  showAutoComplete: boolean;
  countryObj: any;
  errorStatus: boolean;
  errorMsg: string;
  constructor(private location: Location, private navCtrl: NavController,
    public fb: FormBuilder, private networkSvc: NetworkService, private commonSvc: CommonService,
    private onboardingSvc: OnboadingService, private sharedSvc: SharedService, private menuCtrl: MenuController) { 
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
   this.objects =[ 
    {name: 'USA', code: '+1'}, 
    {name: 'Canada', code: '+21'}, 
    {name: 'Japan', code: '+31'}, 
    {name: 'UK', code: '+41'}, 
    {name: 'Indonesia', code: '+51'}, 
    {name: 'Itally', code: '+61'}, 
    {name: '+71', code: 'AS'}, 
    {name: '+81', code: 'AS'}, 
    {name: 'India', code: '+91'}, 
  ]
  }

  ionViewWillEnter(){
    this.menuCtrl.swipeGesture(false)
    this.loginForm.value.searchText = "";
    this.commonSvc.getCountryCode().then(data=>{
      this.countryObj = data;
    });
  }

  ionViewDidLeave() {
    this.menuCtrl.swipeGesture(true)
  }

  backBtn(){
    this.location.back();
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
            this.commonSvc.showMessage(response.message)
            this.navCtrl.navigateForward(['enter-otp'],{state: data})
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
