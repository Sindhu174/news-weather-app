import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CredGuard } from '../cred.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  credDetails: any[];
  isLogin: boolean;
  msg: string;

  constructor(public loginSer: AuthService, public routeGuard: CredGuard, public route: Router) { }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
      'name': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  get userNameCtrl(){
    return this.loginForm.get('name')
  }
  get passwordCtrl(){
    return this.loginForm.get('password')
  }

  doLogin(){
    this.loginSer.doLoginCheck().subscribe({

      
      next: (data: any[])=>{
        for(let userDet of data){
          if(userDet.name.toLowerCase() == this.loginForm.value.name.toLowerCase() && userDet.password == this.loginForm.value.password){
            this.isLogin = true;
            this.route.navigateByUrl('/menu')
            this.loginForm.reset();
            this.loginSer.loggedUser(this.isLogin);
            localStorage.setItem("loggedUser", userDet.name)
            
          }
          else{
            this.msg = "Invalid username/password!"
            this.isLogin = false;
                       
          }
         
        }
        
        
      },
      error: (error: any)=>{
        console.log(error)
      }
    })

   

  }
  

}
