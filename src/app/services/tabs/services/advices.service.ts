import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../http.service';
import { CommonService } from '../../common.service';
import { ServiceURL } from '../../urls/service.url';
@Injectable({
  providedIn: 'root'
})
export class AdvicesService {

  constructor(public http: HttpService,private commonSvc: CommonService) { }

  listOfAdvices(authToken): Observable<any> {
    return this.http.getWithToken(ServiceURL.LIST_OF_ADVICES, authToken);
  }

}