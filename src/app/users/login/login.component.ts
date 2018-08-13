import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LogincheckService } from '../../logincheck.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User

  login():void{

  }
  register(): void{
    this.router.navigateByUrl('/user/create')
  }

  constructor(private Logsvc: LogincheckService, private router:Router) { }

  ngOnInit() {
  }

}
