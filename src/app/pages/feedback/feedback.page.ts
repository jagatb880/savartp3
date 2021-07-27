import { Component, OnInit ,ViewChild} from '@angular/core';
// import { Events } from '@ionic/angular'
import { Location } from '@angular/common';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  @ViewChild('rating') rating : any;
  datas: { name: string; }[];
  constructor(private location: Location,) {
    this.datas = [{"name":"Bugs in mobile app"},{"name":"Poor returns"},{"name":"Not satisfied with advice",},{"name":"Bad support"},
      {"name":"Bugs in website"},
      {"name":"Bad UI"}]
   }

  ngOnInit() {
  //   this.events.subscribe(this.rating.eventInfo.topic, ()=> {
  //     console.log("changed rating", this.rating._rating);
  //     // do your stuff
  // });
  }
  logRatingChange(rating){
    console.log("changed rating: ",rating);
    // do your stuff
}
rate=1;

onRate(rate) {
    console.log(rate)
    this.rate = rate;
    switch(rate){
      case 1:
        this.datas = [{"name":"Bugs in mobile app"},{"name":"Poor returns"},{"name":"Not satisfied with advice",},{"name":"Bad support"},
        {"name":"Bugs in website"},{"name":"Bad UI"}]
        break;
      case 2:
        this.datas = [{"name":"Bugs in website"},{"name":"Average returns"},{"name":"Bugs in mobile app",},{"name":"Need better support"},
        {"name":"Advice improvement needed"},{"name":"Bad UI"}]
        break;
      case 3:
        this.datas = [{"name":"UI improvement"},{"name":"Better support"},{"name":"New features required",}]
        break;  
      case 4:
        this.datas = [{"name":"Ethics"},{"name":"Support"},{"name":"Website",},{"name":"Value"},{"name":"Performance"},{"name":"App",}]
        break;  
      case 5:
        this.datas = [{"name":"Ethics"},{"name":"Support"},{"name":"Website",},{"name":"Value"},{"name":"Performance"},{"name":"App",}]
        break;  
    }
  }
  backBtn(){
    this.location.back();
  }
}
