import { Component, OnInit ,ViewChild} from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  sliderOne: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false
  };
  constructor(private navCtrl: NavController, private menuCtrl: MenuController) { 
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          img: "assets/icon/onboarding-one.png"
        },
        {
          img: "assets/icon/onboarding-one.png"
        },
        // {
        //   img: "assets/images/banner(grocery).png"
        // },
        // {
        //   img: "assets/images/banner(grocery2).jpg"
        // },
        // {
        //   img: "assets/images/banner(grocery3).jpg"
        // }
      ]
    };
  }

  ngOnInit() {
  }

  signup(){
    this.navCtrl.navigateForward(['signup']);
  }

  ionViewWillEnter() {
    this.menuCtrl.swipeGesture(false)
  }
  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }


  ionViewDidLeave() {
    this.menuCtrl.swipeGesture(true)
  }
}
