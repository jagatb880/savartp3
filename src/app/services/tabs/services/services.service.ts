import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../http.service';
import { CommonService } from '../../common.service';
import { ServiceURL } from '../../urls/service.url';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http: HttpService,private commonSvc: CommonService) { }

  raiseInvestmentRequest(body, authToken): Observable<any> {
    return this.http.postWithToken(ServiceURL.RAISE_INVESTMENT_REQUEST, body, authToken);
  }

  raiseCustomRequest(body, authToken): Observable<any> {
    return this.http.postWithToken(ServiceURL.RAISE_CUSTOM_REQUEST, body, authToken);
  }

}