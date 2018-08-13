import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Json } from '../json';
import { Forum } from './forum';

@Injectable({
  providedIn: 'root'
})
export class ForumsvcService {

  url: "http://localhost:58042/Forums/"

  get(id: number) : Observable<Json>{
    return this.http.get(this.url+"get/"+id) as Observable<Json>;
  }
  list(): Observable<Json>{
    return this.http.get(this.url+"list") as Observable<Json>;
  }

  create(forum: Forum) : Observable<Json>{
    return this.http.post(this.url+"create", forum) as Observable<Json>;
  }

  edit( forum: Forum) : Observable<Json>{
    return this.http.post(this.url+"change", forum) as Observable<Json>;
  }

  remove(forum: Forum) : Observable<Json>{
    return this.http.post(this.url+"delete", forum) as Observable<Json>;
  }
  constructor(private http: HttpClient) { }
}
