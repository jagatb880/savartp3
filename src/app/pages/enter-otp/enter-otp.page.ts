import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NavController, MenuController } from '@ionic/angular';
import { interval, Observable } from "rxjs";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/services/network.service';
import { Messages } from 'src/app/services/constants/message';
import { CommonService } from 'src/app/services/common.service';
import { OnboadingService } from 'src/app/services/onboarding/onboading.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enter-otp',
  templateUrl: './enter-otp.page.html',
  styleUrls: ['./enter-otp.page.scss'],
})
export class EnterOtpPage implements OnInit {

  otpForm: FormGroup;
  showClick = false;
  data = {
    "custregmobile":'',
    "custcountrycode":'',
    "otp":''
  }

  @ViewChild("first", { static: false }) first: ElementRef;
  @ViewChild("second", { static: false }) second: ElementRef;
  @ViewChild("third", { static: false }) third: ElementRef;
  @ViewChild("four", { static: false }) four: ElementRef;
  @ViewChild("singUp", { static: false }) singUp: ElementRef;
  type: any;
  authtoken: any;

  constructor(private location: Location, private navCtrl: NavController, 
    private elementRef: ElementRef, private router: Router, private netwrokSvc: NetworkService,
    private commonSvc: CommonService, public fb: FormBuilder, private onboardingSvc: OnboadingService,
    private storage: Storage,private route: ActivatedRoute, private menuCtrl: MenuController) { 
      this.data.custregmobile = this.router.getCurrentNavigation().extras.state.custregmobile
      this.data.custcountrycode = this.router.getCurrentNavigation().extras.state.custcountrycode
    }

  ngOnInit() {
    this.createOTPForm();
    this.route.params.subscribe(params => {
      this.type = params.type;
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeGesture(false)
    this.showTimer();
  }

  ionViewDidLeave() {
    this.menuCtrl.swipeGesture(true)
  }

  createOTPForm() {
    this.otpForm = this.fb.group({
      first: [null, Validators.required],
      second: [null, Validators.required],
      third: [null, Validators.required],
      four: [null, Validators.required],
    });
  }

  focusNext(event, index) {
    console.log(index);
    console.log(event);
    if (index === 1) {
      console.log(event.which !== 8);
      if (event.which !== 8) {
        console.log(this.second);
        this.second.nativeElement.focus();
      }
    } else if (index === 2) {
      if (event.which !== 8) {
        console.log(this.second);
        this.third.nativeElement.focus();
      } else if (event.target.value.length <= 0) {
        this.first.nativeElement.focus();
      }
    } else if (index === 3) {
      if (event.which !== 8) {
        console.log(this.second);
        this.four.nativeElement.focus();
      } else if (event.target.value.length <= 0) {
        this.second.nativeElement.focus();
      }
    } else {
      if (event.which === 8 && event.target.value.length <= 0) {
        this.third.nativeElement.focus();
      }
    }
  }

  backBtn(){
    // this.location.back();
    if (this.type === 'forgotpassword')
    {
      this.router.navigate(['/forgot-password']);
    }
    else{
      this.router.navigate(['/signup']);
    }
  }

  showTimer() {
    this.showClick = false;
    var callDuration = this.elementRef.nativeElement.querySelector("#time");
    this.startTimer(callDuration);
  }

  startTimer(display) {
    var timer = 120;
    var minutes;
    var seconds;

    let a = interval(1000).subscribe((x) => {
      minutes = Math.floor(timer / 60);
      seconds = Math.floor(timer % 60);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      --timer;
      if (timer == 0) {
        this.showClick = true;
        display.textContent = "";
        a.unsubscribe();
      }
    });
  }

  getOtpValue() {
    return (
      this.otpForm.controls.first.value +
      this.otpForm.controls.second.value +
      this.otpForm.controls.third.value +
      this.otpForm.controls.four.value
    );
  }

  verifyNumber(){
    if(this.netwrokSvc.online){
      this.commonSvc.showLoader("Verifying Otp...")
      let enteredOtp: string;
      enteredOtp = this.getOtpValue()
      this.data.otp = enteredOtp;
      this.onboardingSvc.verifyOtp(this.data).subscribe(response=>{
        this.commonSvc.dismissLoader();
        console.log(response);
        switch (response.statusCode) {
          case 0:
            this.commonSvc.showMessage(response.data.message)
            this.commonSvc.setTokenToStorage("authtoken",response.data).then(val=>{
              this.commonSvc.authToken = val.token
            })
              console.log(this.authtoken);
              if (this.type === 'forgotpassword')
                  {
                    this.router.navigate(['/set-password']);
                  }
                  else{
                    this.router.navigate(['/create-password']);
                  }
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
    }else{
      this.commonSvc.showMessage(Messages.CHECK_INERNET_CONNECTION)
    }
  }
 

}
