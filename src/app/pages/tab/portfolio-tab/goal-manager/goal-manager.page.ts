import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goal-manager',
  templateUrl: './goal-manager.page.html',
  styleUrls: ['./goal-manager.page.scss'],
})
export class GoalManagerPage implements OnInit {
  
  constructor(private location: Location){
    
  }

  ngOnInit() {
  }
  
  
  backBtn(){
    this.location.back();
  }
}
