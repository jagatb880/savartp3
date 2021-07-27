import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-goal-managermodal',
  templateUrl: './goal-managermodal.component.html',
  styleUrls: ['./goal-managermodal.component.scss'],
})
export class GoalManagermodalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  backBtn(){
    this.modalCtrl.dismiss()
  }
}
