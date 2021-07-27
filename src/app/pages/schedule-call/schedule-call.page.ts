import { Component, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common';

@Component({
  selector: 'app-schedule-call',
  templateUrl: './schedule-call.page.html',
  styleUrls: ['./schedule-call.page.scss'],
})
export class ScheduleCallPage implements OnInit {
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  markDisabled: (date: Date) => boolean;
  selectedDate: Date;
  currentDate: any;

  constructor(private datepipe: DatePipe,private location: Location) { }

  ngOnInit() {
    this.markDisabled = (date: Date) => {
      var current = new Date();
      return date > current;
  };
  }
// Change current month/week/day
next() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slideNext();
}

back() {
  var swiper = document.querySelector('.swiper-container')['swiper'];
  swiper.slidePrev();
}
onTimeSelected(ev) {
  let selected = new Date(ev.selectedTime);
  this.selectedDate = selected
  // this.storage.set("Currentdate",selected)
  this.currentDate = this.datepipe.transform(selected,"MMM y");
  // this.currentYear = this.datepipe.transform(selected,"y");
  // this.currentMonth = this.datepipe.transform(selected,"MMM");
}
backBtn(){
  this.location.back();
}
}
