import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-investment-blacklist-text',
  templateUrl: './investment-blacklist-text.page.html',
  styleUrls: ['./investment-blacklist-text.page.scss'],
})
export class InvestmentBlacklistTextPage implements OnInit {
  data: { text: string; }[];

  constructor(private location: Location,) {
    this.data = [{'text':'Our unique Vantage & EFG systems work best with the fewest restrictions possible and specifications, customizations reduce the coverage of advisable investments considerably. We hence request you to make choices carefully.'},
    {'text':'Customization is currently available for stock investments only.'},
    {'text':'Savart enables these customizations on a best effort basis and does not guarantee adherence.'},
    {'text':'Only companies with majority (>50%) revenue from the specific listed sectors/groups are available for exclusion.'},
    {'text':'You can only select one theme at a time. You may edit it anytime.'},
    {'text':'You can make multiple selections within a theme to exclude the specific sectors/groups from your portfolio.'},
    {'text':'Our unique Vantage & EFG systems work best with the fewest restrictions possible and specifications, customizations reduce the coverage of advisable investments considerably. We hence request you to make choices carefully.'},
    {'text':'Customization is currently available for stock investments only.'},
    {'text':'Savart enables these customizations on a best effort basis and does not guarantee adherence.'},
    {'text':'Only companies with majority (>50%) revenue from the specific listed sectors/groups are available for exclusion.'},
    {'text':'You can only select one theme at a time. You may edit it anytime.'},
    {'text':'You can make multiple selections within a theme to exclude the specific sectors/groups from your portfolio.'}]
   }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
