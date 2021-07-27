import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { ServiceURL } from '../urls/service.url';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class OnboadingService {

  constructor(public http: HttpService,private commonSvc: CommonService) { }

  sendOtpForRegisteration(body): Observable<any> {
    return this.http.post(ServiceURL.SENT_OTP_FOR_REGISTRATION, body);
  }

  verifyOtp(body): Observable<any> {
    return this.http.post(ServiceURL.VERIFY_OTP, body);
  }

  createPassword(body,authToken): Observable<any> {
    console.log(authToken)
    return this.http.postWithToken(ServiceURL.CREATE_PASSWORD, body,authToken);
    
  }
  
  validateMobileNumber(body): Observable<any> {
    return this.http.post(ServiceURL.VALIDATE_MOBILE_NUMBER, body);
  }

  clientbyId(body): Observable<any> {
    return this.http.post(ServiceURL.CLIENT_BY_ID, body);
  }
 
}
