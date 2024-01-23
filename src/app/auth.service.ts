import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredGuard } from './cred.guard';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin: boolean;
  msg: string

  constructor(public http: HttpClient, public route: Router) { }

  doLoginCheck(){
    return this.http.get<any[]>("./assets/data.json")
  }

  loggedUser(val:boolean){
   this.isLogin=val;
  }
}
