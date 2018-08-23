import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LogincheckService } from '../../logincheck.service';
import { Router } from '../../../../node_modules/@angular/router';
import { UsersvcService } from '../usersvc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User
  message:string;


  login():void{
    this.Usesvc.login(this.user.Username,this.user.Password)
    .subscribe(resp=>{
      let us= resp.Data;
      if(us==null){
        this.message="User does not exist";
      }
      else{
        this.Logsvc.logInUser(us);
        this.router.navigateByUrl('/home');
      }
    })
  }
  register(): void{
    this.router.navigateByUrl('/user/create')
  }

  constructor(private Logsvc: LogincheckService, private router:Router, private Usesvc:UsersvcService) { }

  ngOnInit() {
  }

}
