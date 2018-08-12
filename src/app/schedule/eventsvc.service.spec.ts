import { TestBed, inject } from '@angular/core/testing';

import { EventsvcService } from './eventsvc.service';

describe('EventsvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsvcService]
    });
  });

  it('should be created', inject([EventsvcService], (service: EventsvcService) => {
    expect(service).toBeTruthy();
  }));
});
