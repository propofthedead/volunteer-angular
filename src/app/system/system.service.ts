import { Injectable } from '@angular/core';
import { User } from '../users/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
loggedInUser: User=null;

getLoggedInUser():User{
  if(this.isLoggedIn())
    return this.loggedInUser;
  return null;
}

getLoggedInUsername():string{
  if(this.isLoggedIn())
    return this.loggedInUser.Firstname+ " "+this.loggedInUser.Lastname;
  return "Login";
}
setLoggedInuser(user:User):void{
  console.log("set user is changed to ", user);
  this.loggedInUser=user;
}
clearLoggInUser(): void{
  this.loggedInUser=null;
}
checkLogin():void{
  if(!this.isLoggedIn())
    this.router.navigateByUrl("/user/login")
}
isLoggedIn():boolean{
  console.log("is a user logged in?", (this.loggedInUser==null) ? "No":"Yes");
  return this.loggedInUser!=null;
}
  constructor(private router: Router) { }
}
