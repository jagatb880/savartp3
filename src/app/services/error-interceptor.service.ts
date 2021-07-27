import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private storage: Storage, private navCtrl: NavController, private commonSvc: CommonService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
          if (err.status === 401) {
              // auto logout if 401 response returned from api
              this.commonSvc.dismissLoader();
              this.commonSvc.showMessage("Session expired.")
              this.storage.clear();
              this.navCtrl.navigateRoot(['login'])
          }

          const error = err.error.message || err.error.detail || err.statusText;
          return throwError(error);
      }));
  }
}
