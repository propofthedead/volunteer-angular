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

reroute():void{
  this.router.navigateByUrl
}
  constructor(private router: Router) { }
}
