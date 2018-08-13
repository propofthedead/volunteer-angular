import { TestBed, inject } from '@angular/core/testing';

import { ChatsvcService } from './chatsvc.service';

describe('ChatsvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatsvcService]
    });
  });

  it('should be created', inject([ChatsvcService], (service: ChatsvcService) => {
    expect(service).toBeTruthy();
  }));
});
