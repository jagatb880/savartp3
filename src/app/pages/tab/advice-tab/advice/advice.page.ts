import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advice',
  templateUrl: './advice.page.html',
  styleUrls: ['./advice.page.scss'],
})
export class AdvicePage implements OnInit {

  rowDatas: any;
  bussinessdescription: { text: string; }[];
  constructor() { }

  ngOnInit() {
    this.bussinessdescription = [{'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    {'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'},
    {'text':'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'}]
    this.rowDatas = [
      {
          "desc": "Margin Ratios",
          "af": "",
          "industry": ""
      },
      {
          "desc": "Pre Tax Margin(%)",
          "af": "9.04",
          "industry": "11.75"
      },
      {
          "desc": "PAT Margin (%)",
          "af": "9.04",
          "industry": "11.75"
      },
      {
          "desc": "ROE(%)",
          "af": "9.04",
          "industry": "11.75"
      },
      {
        "desc": "ROCE(%)",
        "af": "9.04",
        "industry": "11.75"
      },
      {
        "desc": "Asset Turnover(x)",
        "af": "9.04",
        "industry": "11.75"
      },
      {
        "desc": "Working Capital/Sales(x)",
        "af": "9.04",
        "industry": "11.75"
      },
    ]
  }

}
