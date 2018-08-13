import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listener } from '../../../node_modules/@angular/core/src/render3/instructions';
import { Observable } from '../../../node_modules/rxjs';
import { Json } from '../json';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventsvcService {

  url= "http://localhost:58042/Events/"

  list(): Observable<Json>{
    return this.http.get(this.url+"List") as Observable<Json>;
  }
  get(id: number) : Observable<Json>{
    return this.http.get(this.url+"Get/"+id) as Observable<Json>;
  }

  create(event:Event) : Observable<Json>{
    return this.http.post(this.url+"Add",event) as Observable<Json>;
  }

  edit(event: Event) : Observable<Json>{
    return this.http.post(this.url+"Change", event) as Observable<Json>;
  }
  remove( event: Event): Observable<Json>{
    return this.http.post(this.url+"Remove",event) as Observable<Json>;
  }
  constructor(private http: HttpClient) { }
}
