import { TestBed, inject } from '@angular/core/testing';

import { MessagesvcService } from './messagesvc.service';

describe('MessagesvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagesvcService]
    });
  });

  it('should be created', inject([MessagesvcService], (service: MessagesvcService) => {
    expect(service).toBeTruthy();
  }));
});
