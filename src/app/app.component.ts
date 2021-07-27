import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
import { Platform, AlertController, NavController } from '@ionic/angular';
import { NetworkService } from './services/network.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // public appPages = [
  //   { title: 'My Subscription', url: '',  subtitle:'Active Plan & services', icon: '', subPages:[]},
  //   { title: 'Brokerage Account', url: '', subtitle:'Demat Account' , icon: '', subPages: []},
  //   { title: 'Settings', url: '/setting', subtitle:'Currency, Notification, Dark mode', icon: '', subPages:[]},
  //   { title: 'Help Center', url: '/help-center', subtitle:'FAQ, Contact', icon: '', subPages:[]},
  //   { title: 'Refer and Earn', url: '', subtitle:'My Referrals & Refer',icon: 'chevron-forward-outline' , subPages:[
  //     { title: 'Fefer a Friend', url: ''},
  //     { title: 'My Referrals', url: ''}
  //   ], hideSubMenu: false},
  //   { title: 'Feedback', url: '/feedback', subtitle:'', icon: '', subPages:[]},
  //   { title: 'About Us', url: '', subtitle:'T & C, Privacy Policy', icon: '', subPages:[
  //     { title: 'Ablout Savart', url: '/about-savart', icon: 'chevron-forward-outline'},
  //     { title: 'Terms and Conditions', url: '/term-and-condition', icon: 'chevron-forward-outline'},
  //     { title: 'Privacy Policy', url: '/privacy-policy', icon: 'chevron-forward-outline'}
  //   ]},
  //   { title: 'Logout', url: '', subtitle:'',icon: '', subPages:[]},
  // ];
  public appPages = [
    { title: 'Brokerage Account', url: '', },
    { title: 'Refer and earn', url: '', },
    { title: 'Blog', url: '', },
  ];
  public secondappPages = [
    { title: 'Settings', url: '',  },
    { title: 'Feedback', url: '', },
    { title: 'Generate Performance Report', url: '', },
    { title: 'Help Center', url: '', },
  ];
  public thirdappPages = [
    { title: 'About Us', url: '', },
    { title: 'Logout', url: '', subtitle:'',icon: '', subPages:[]},
   
  ];
  constructor(private commonSvc: CommonService, private platform: Platform, private networkSvc: NetworkService,
    private statusBar: StatusBar, private splashScreen: SplashScreen, private router: Router, private navCtrl: NavController,
    private alertCtrl: AlertController, private location: Location, private storage: Storage,public menuCtrl: MenuController) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.styleBlackOpaque();
      this.splashScreen.hide();
      this.networkSvc.listenNetwork();
      this.getStorageAndSetToVar();
      this.backButtonEvent();
    })
  }

  openMenu(menuItem){
    if(menuItem.subPages.length > 0){
      event.stopPropagation();
      menuItem.hideSubMenu = menuItem.hideSubMenu == true?false:true
      menuItem.icon = menuItem.hideSubMenu == true?'chevron-down-outline':'chevron-forward-outline'
    }else{
      switch (menuItem.title) {
        case 'Logout':
          this.storage.clear();
          this.navCtrl.navigateRoot(['login'])
          break;
      
        default:
          break;
      }
    }
  }

  openSubMenu(subItem){

  }

  profile(){
    this.menuCtrl.toggle();
    this.navCtrl.navigateForward(['/my-profile'])
  }
  getStorageAndSetToVar(){
    this.commonSvc.getTokenToStorage("authtoken").then(authToken=>{
      if(authToken != null){
        console.log(authToken.token);
        this.commonSvc.authToken = authToken.token
      }
    });
  }

  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      if (this.router.isActive('/dashboard', true)) {
        const alert = await this.alertCtrl.create({
          header: "Info",
          message: "Are you sure, you want to close app?",
          cssClass:'my-custom-class',
          buttons: [
            {
              text: 'NO',
              role: 'cancel'
            }, {
              text: 'YES',
              handler: () => {
                navigator['app'].exitApp();
              }
            }
          ]
        });
        await alert.present();
      } else if (this.router.isActive('/login', true)) {
        navigator['app'].exitApp();
      } else {
        this.location.back();
      }
    });
  }
}
