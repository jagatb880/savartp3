import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NetworkService } from 'src/app/services/network.service';
import { Messages } from '../../services/constants/message'
import { CommonService } from 'src/app/services/common.service';
import { OnboadingService } from 'src/app/services/onboarding/onboading.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-request-a-call',
  templateUrl: './request-a-call.page.html',
  styleUrls: ['./request-a-call.page.scss'],
})
export class RequestACallPage implements OnInit {
  loginForm: FormGroup;
  userForm: any;
  objects: any
  searchText: string;
  datas:any
  showAutoComplete: boolean;
  countryObj: any;
  errorStatus: boolean;
  errorMsg: string;
  constructor( public fb: FormBuilder, private networkSvc: NetworkService, private commonSvc: CommonService,
    private onboardingSvc: OnboadingService, private sharedSvc: SharedService, private menuCtrl: MenuController) {
    this.createLoginForm();
   }

  ngOnInit() {
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
