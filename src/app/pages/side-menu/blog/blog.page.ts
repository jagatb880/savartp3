import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  datas: any
  savartBenefits: any;
  blogs: any;
  videoPlayStatus: boolean;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.videoPlayStatus = true;
    this.datas = [
      {
        "name":"All"
      },
      {
        "name":"Stocks"
      },
      {
        "name":"Mutual Funds"
      },
      {
        "name":"Bonds"
      },
      {
        "name":"Rajat"
      }
    ]
    this.savartBenefits = [
      {
        "div1":"Weighted Average Cost of Capital (WACC)",
        "div2":"Read"
      },
      {
        "div1":"Weighted Average Cost of Capital (WACC)",
        "div2":"Read"
      },
      {
        "div1":"Weighted Average Cost of Capital (WACC)",
        "div2":"Read"
      },
      {
        "div1":"Weighted Average Cost of Capital (WACC)",
        "div2":"Read"
      },
    ]
    this.blogs = [
      {
        "type":"blog",
        "text1":"By Savart",
        "text2":"Mutual Funds",
        "text3":"26 Jan, 2020",
        "text4":"Weighted Average Cost of Capital (WACC)",
        "text5":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        "type":"blog",
        "text1":"By Savart",
        "text2":"Mutual Funds",
        "text3":"26 Jan, 2020",
        "text4":"Weighted Average Cost of Capital (WACC)",
        "text5":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        "type":"video",
        "url":"https://www.youtube.com/embed/nkprrx-F3ko?enablejsapi=1"
      },
      {
        "type":"blog",
        "text1":"By Savart",
        "text2":"Mutual Funds",
        "text3":"26 Jan, 2020",
        "text4":"Weighted Average Cost of Capital (WACC)",
        "text5":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        "type":"blog",
        "text1":"By Savart",
        "text2":"Mutual Funds",
        "text3":"26 Jan, 2020",
        "text4":"Weighted Average Cost of Capital (WACC)",
        "text5":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
    ]
  }

  ionViewWillLeave() {
    let listaFrames = document.getElementsByTagName("iframe");
 
    for (var index = 0; index < listaFrames.length; index++) {
     let iframe = listaFrames[index].contentWindow;
     iframe.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
   }
 }

 onScroll(){
  if (this.isElementInViewport(document.getElementById('videoTag'))) {
      this.videoPlayStatus = false;
      // if(this.videoPlayStatus){
      //   let listaFrames = document.getElementsByTagName("iframe");
      //   for (var index = 0; index < listaFrames.length; index++) {
      //     let iframe = listaFrames[index].contentWindow;
      //     iframe.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      //   }
      // }
    }else{
      if(!this.videoPlayStatus){
        this.videoPlayStatus = true;
        let listaFrames = document.getElementsByTagName("iframe");
        for (var index = 0; index < listaFrames.length; index++) {
          let iframe = listaFrames[index].contentWindow;
          iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      }
    }
  }

  isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }

  goToAnnoucement(blog){
    this.navCtrl.navigateForward(['side-menu/announcements']);
  }

}
