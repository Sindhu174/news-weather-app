import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CredGuard implements CanActivate {

  constructor(public authSer: AuthService, public route: Router){

  }
  
  canActivate(): boolean {
    if(this.authSer.isLogin){
      return this.authSer.isLogin;
    }
    else{
      this.route.navigateByUrl("/")
      return this.authSer.isLogin
    }
   
  }
  
}
