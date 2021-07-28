import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-savart-community-guidelines',
  templateUrl: './savart-community-guidelines.page.html',
  styleUrls: ['./savart-community-guidelines.page.scss'],
})
export class SavartCommunityGuidelinesPage implements OnInit {
  data: { text: string; }[];

  constructor(private navCtrl: NavController,private location: Location,) {
    this.data = [{'text':'The Savart community has been created to nurture a healthy discussion about investments, personal finance, research, and the capital markets in general.'},
    {'text':'Savart does not support short-term, intraday trading or speculative assets and derivatives. Hence, topics pertaining to this area are not available in the Savart community.'},
    {'text':'Discussions that digress from the community subjects and topics will be promptly deleted.'},
    {'text':'You must remain polite and respectful to other members of the community at all times. Avoid personal attacks, non-factual arguments, offensive language, hate speech or spam induced content.'},
    {'text':'Always cite the source and credit the owner of the information that you are posting, in all cases when it is not your original content. Do not steal or take credit for other’s intellectual property.'},
    {'text':'Posting of personal information, external links, or solicitation of any kind of commercial or non-commercial engagement with any other member is prohibited.'},
    {'text':'‘Savart admin’ is the moderator and reserves the right to delete any posts or the user’s membership in case of any breach or mis-conduct.'},
    {'text':'If you notice or find any objectionable content, please ‘report’ or flag it to the moderator to help us make the community a better place for all.'},
    {'text':'Your membership to the community is contingent upon your adherence to the community guidelines. Your subscription to services of Savart does not grant immunity from the guidelines in any manner.'},
    {'text':'Savart is not liable or/and responsible for the authenticity of the information posted in the community. Users must exercise discretion before making any decision.'},
    {'text':'The terms & conditions, privacy policy, service guidelines (for subscribers only) of Savart are applicable for the community users.'},]
   }

  ngOnInit() {
  }
  backBtn(){
    this.location.back();
  }
}
