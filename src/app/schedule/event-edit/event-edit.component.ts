import { Component, OnInit } from '@angular/core';
import { EventsvcService } from '../eventsvc.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  
  event:Event

  change():void{
    this.eventsvc.edit(this.event);
    this.router.navigateByUrl('/event/list');
  }
  constructor(private eventsvc: EventsvcService, private routed: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

}
