import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/services/common.service';
import { Messages } from 'src/app/services/constants/message';
import { NetworkService } from 'src/app/services/network.service';
import { OnboadingService } from 'src/app/services/onboarding/onboading.service';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  selectedSegment: any;
  passwordToggleIcon = 'assets/icon/eye.png';
  // passwordToggleIcons = 'eye-outline';
  showPassword = false;
  objects: any
  searchText: string;
  datas:any
  userForm: any;
  showAutoComplete: boolean;
  loginForm: FormGroup;
  customerIdForm: FormGroup;
  countryObj: any;

  //variable declared for error status and error msg for mobile number section
  errorStatus: boolean;
  passwordErrorStatus: boolean;
  errorMsg: string;
  passwordErrorMsg: string;

  //variable declared for error status and error msg for customer id section
  custIdErrorStatus: boolean;
  custPasswordErrorStatus: boolean;
  custIdErrorMsg: string;
  custPasswordErrorMsg: string;

  constructor(public fb: FormBuilder,private location: Location, private commonSvc: CommonService,
    private networkSvc: NetworkService, private onboardingSvc: OnboadingService, private navCtrl: NavController,
    public menuCtrl: MenuController) { 
    this.selectedSegment = 'mobilenumber';
    this.createLoginForm();
    this.createLoginWithCustomerId()
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      custregmobile: ["", Validators.compose([Validators.required, Validators.minLength(7)])],
      custcountrycode: ["+91", Validators.required,],
      searchText: [""],
      password: ["",Validators.required],
    });
    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  
  createLoginWithCustomerId() {
    this.customerIdForm = this.fb.group({
      customerId: ["", Validators.required],
      password: ["",Validators.required],
    });
    this.customerIdForm.valueChanges.subscribe(data => this.onValueChangedForCustomer(data));
  }

  onValueChangedForCustomer(data){
    if(data.customerId.length == 0){
      this.custIdErrorStatus = false;
      this.custIdErrorMsg = ''
      this.custPasswordErrorStatus = false
    }else{
      this.custIdErrorMsg = ''
      this.custIdErrorStatus = false;
      if(data.password.length != 0){
        this.custPasswordErrorMsg = ''
        this.custPasswordErrorStatus = false;
      }
    }
  }

  onValueChanged(data){
    console.log(data)
    if(data.custregmobile.length == 0){
      this.errorStatus = false;
      this.passwordErrorMsg = ''
        this.passwordErrorStatus = false
    }else if(data.custregmobile.length == 10){
      this.errorStatus = false;
      if(data.password.length == ''){
        this.passwordErrorMsg = ''
        this.passwordErrorStatus = false
      }else{
        this.passwordErrorMsg = 'Please enter the password'
        this.passwordErrorStatus = true
      }
    }else{
      this.errorMsg = ''
      this.errorStatus = true;
    }
  }

  segmentChanged(){
    
  }

  ngOnInit() {
    this.errorStatus = false;
    this.passwordErrorStatus = false
    this.showAutoComplete = false;
    this.datas = []
    this.userForm = new FormGroup({
      country: new FormControl('', Validators.required)
   });
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

  toggleNewPassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon === 'assets/icon/eye.png') {
      this.passwordToggleIcon = 'assets/icon/closeeye.png';
    }else {
      this.passwordToggleIcon = 'assets/icon/eye.png';
    }
  }

  backBtn(){
    this.location.back();
  }

  openSearcBox(){
    this.showAutoComplete = true;
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
    this.commonSvc.numberOnlyValidation(event)
  }


  login(){
    console.log(this.networkSvc.online);
    if(this.networkSvc.online){
      if(this.selectedSegment == 'mobilenumber'){
        this.checkMobileNumberSegment();
      }else{
        this.checkCustomerIdSegment();
      }
    }else{
      this.commonSvc.showMessage(Messages.CHECK_INERNET_CONNECTION)
    }
  }

  checkMobileNumberSegment(){
    if(!this.loginForm.value.custregmobile){
      this.errorMsg = 'Please enter the mobile number'
      this.errorStatus = true
    }else if(!this.loginForm.value.password){
      this.passwordErrorMsg = 'Please enter the password'
      this.passwordErrorStatus = true
    }else{
      this.errorStatus = false
      this.passwordErrorStatus = false
      this.commonSvc.showLoader("Please wait...")
      let data= {
        "custregmobile":this.loginForm.value.custregmobile,
        "custcountrycode": Math.abs(this.loginForm.value.custcountrycode).toString(),
        "password":this.loginForm.value.password
      }
      this.onboardingSvc.validateMobileNumber(data).subscribe(response=>{
        console.log(response)
        this.commonSvc.dismissLoader();
        switch (response.statusCode) {
        case 0:
          this.commonSvc.showMessage(response.data.message)
          this.commonSvc.setTokenToStorage("authtoken",response.data).then(val=>{
            this.commonSvc.authToken = val.token
            this.navCtrl.navigateRoot(['tab/tab/portfolio'])
          })
          break;
        case 1:
          this.commonSvc.showMessage("Internal server error")
          break;
        case 2:
          this.commonSvc.showMessage("Incorrect mobile number ")
          break;
        case 3:
          this.commonSvc.showMessage("Incorrect password")
          break;
        }
      })
    }
  }

  checkCustomerIdSegment(){
    if(this.customerIdForm.value.customerId){
      this.custIdErrorMsg = 'Please enter the customer Id'
      this.custIdErrorStatus = true
    }else if(!this.customerIdForm.value.password){
      this.custPasswordErrorMsg = 'Please enter the password'
      this.custPasswordErrorStatus = true
    }else{
      this.custIdErrorStatus = false
      this.custPasswordErrorStatus = false
      this.commonSvc.showLoader("Please wait...")
      let data= {
        "customer_id":this.customerIdForm.value.customerId,
        "password":this.customerIdForm.value.password
      }
      this.onboardingSvc.clientbyId(data).subscribe(response=>{
        console.log(response)
        this.commonSvc.dismissLoader();
        switch (response.statusCode) {
        case 0:
          this.commonSvc.showMessage(response.data.message)
          this.navCtrl.navigateForward(['enter-otp'],{state: data})
          break;
        case 1:
          this.commonSvc.showMessage("Internal server error")
          break;
        case 2:
          this.commonSvc.showMessage("Incorrect customer id")
          break;
        case 3:
          this.commonSvc.showMessage("Incorrect password")
          break;
        }
      })
    }
  }
}
