import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-referal-term-and-condition',
  templateUrl: './referal-term-and-condition.page.html',
  styleUrls: ['./referal-term-and-condition.page.scss'],
})
export class ReferalTermAndConditionPage implements OnInit {
  data: { text: string; }[];

  constructor(private location: Location,) { 
    this.data = [{'text':'The referral bonus for the respective service shall be displayed in the referral section and updated from time to time.'},
    {'text':'A referral bonus is paid out only after the subscription is successfully completed by the referral and after thorough verification by Team Savart.'},
    {'text':'The status of the referral is updated on your dashboard within 24 hours of a successful referral.'},
    {'text':'The referral bonus is paid out to the bank account specified in the referral profile section within 30 days from the end of the month in which the referral was made.'},
    {'text':'The subscription by your referral must happen from Savart web or mobile application only.'},
    {'text':'The referral is only paid if the subscriber has used the referral link or input the referral code during payment.'},
    {'text':'This referral program cannot be combined with any other discount or special program.'},
    {'text':'The following activities are prohibited and engaging in any of these activities will lead to initiation of legal action against you and also result in immediate termination and disqualification from the referral program, forfeiture of existing referral invitations and accrued, but not yet received, referral bonus:'},
    {'text':'Savart reserves the right to amend the referral program and all associated details including these terms and conditions at any time without prior notice. Savart’s decisions on all matters relating to this program shall be final and binding on all parties concerned.'},
    {'text':'Only companies with majority (>50%) revenue from the specific listed sectors/groups are available for exclusion.'},
    {'text':'Any act, negligence or omission resulting in reputational, economic, monetary, or other damage in any form whatsoever in nature to Savart. The liability arising out of such act is your sole responsibility and Savart is indemnified in entirety or as permitted by applicable law.'},
    {'text':'Any dispute arising out of this agreement shall fall under the jurisdiction of the courts of Hyderabad, Telangana.'}]
  }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
