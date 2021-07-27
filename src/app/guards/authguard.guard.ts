import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private commonSvc: CommonService, private router: Router){

  }
  async canActivate(
    route: ActivatedRouteSnapshot) {
    let data = await this.commonSvc.getUser()
    if(data){
      return true
    }
    return this.router.parseUrl("/onboarding");
  }
  
}
