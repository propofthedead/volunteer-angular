import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Json } from '../json';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersvcService {

  url="http://localhost:58042/Users/"

  get(id:number):Observable<Json>{
    return this.http.get(this.url+"Get/"+id) as Observable<Json>;
  }

  list(): Observable<Json>{
    return this.http.get(this.url+"List") as Observable<Json>;
  }

  create(user: User) : Observable<Json>{
    return this.http.post(this.url+"Add",user) as Observable<Json>;
  }
  
  edit(user: User) : Observable<Json>{
    return this.http.post(this.url+"Change", user) as Observable<Json>;
  }

  remove(user: User): Observable<Json>{
    return this.http.post(this.url+"Delete", user) as Observable<Json>;
  }

  login(username:string, pass: string) : Observable<Json>{
    return this.http.get(this.url+"login/"+username+"/"+pass) as Observable<Json>;
  }

  constructor(private http: HttpClient) { }
}
