import { TestBed, inject } from '@angular/core/testing';

import { ForumsvcService } from './forumsvc.service';

describe('ForumsvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumsvcService]
    });
  });

  it('should be created', inject([ForumsvcService], (service: ForumsvcService) => {
    expect(service).toBeTruthy();
  }));
});
