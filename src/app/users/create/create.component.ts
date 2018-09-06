import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { create } from 'domain';
import { UsersvcService } from '../usersvc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: User
 
  create():void{
    this.usersvc.create(this.user);
    this.router.navigateByUrl('/user/login')
  }
  constructor(private usersvc: UsersvcService, private router: Router) { }

  ngOnInit() {
  }

}
