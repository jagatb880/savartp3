import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  passwordToggleIcon = 'assets/icon/eye.png';
  // passwordToggleIcons = 'eye-outline';
  passwordCToggleIcon = 'assets/icon/eye.png';
  // passwordCToggleIcons = 'eye-outline';
  passwordConfirmToggleIcon='assets/icon/eye.png';
  showPassword = false;
  showCPassword = false;
  showConfirmPassword =false;
  constructor(private location: Location,) { }
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
  toggleConfirmNewPassword(){
    this.showConfirmPassword = !this.showConfirmPassword;
    if (this.passwordConfirmToggleIcon === 'assets/icon/eye.png') {
      this.passwordConfirmToggleIcon = 'assets/icon/closeeye.png';
    }else {
      this.passwordConfirmToggleIcon = 'assets/icon/eye.png';
    }
  }
  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
