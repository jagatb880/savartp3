import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { NetworkService } from 'src/app/services/network.service';

@Component({
  selector: 'app-research-request-summary',
  templateUrl: './research-request-summary.page.html',
  styleUrls: ['./research-request-summary.page.scss'],
})
export class ResearchRequestSummaryPage implements OnInit {

  constructor(private location: Location, private commonSvc: CommonService, private router: Router,
    private networkSvc: NetworkService) { }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
