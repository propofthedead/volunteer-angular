import { Component, OnInit } from '@angular/core';
import { EventsvcService } from './eventsvc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  events: Event[];

  constructor(private Eventsvc:EventsvcService, private router:Router) { }

  ngOnInit() {
    this.Eventsvc.list()
    .subscribe(resp=>{
      this.events=resp.Data;
      console.log(resp);
    })
  }

}
