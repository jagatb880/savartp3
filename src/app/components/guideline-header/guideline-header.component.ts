import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-guideline-header',
  templateUrl: './guideline-header.component.html',
  styleUrls: ['./guideline-header.component.scss'],
})
export class GuidelineHeaderComponent implements OnInit {

  @Input() heading;
  @Output() onButtonTap: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  openGuideline(event) {
    this.onButtonTap.emit(event);
  }

}
