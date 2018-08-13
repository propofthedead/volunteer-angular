import { Injectable } from '@angular/core';
import { User } from './users/user';
import { Router } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogincheckService {
LoggedUser: User;

logInUser(user:User):void{
  this.LoggedUser=user;
  console.log(user.Username + " is logged in");
}
logOutUser():void{
  this.LoggedUser=null;
  console.log("the user is logged out");
}
checkUser():void{
  if(this.LoggedUser==null){
    this.reroute();
  }
}
reroute():void{
  this.router.navigateByUrl('/user/login')
}
  constructor(private router: Router) { }
}
