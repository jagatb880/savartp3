import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs';
import { ServiceURL } from '../urls/service.url';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public http: HttpService) { }

  getCountryCodeDetails(): Observable<any> {
    return this.http.get(ServiceURL.GET_COUNTRY_CODE_DETAILS);
  }
}
