import { TestBed, inject } from '@angular/core/testing';

import { CommentsvcService } from './commentsvc.service';

describe('CommentsvcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsvcService]
    });
  });

  it('should be created', inject([CommentsvcService], (service: CommentsvcService) => {
    expect(service).toBeTruthy();
  }));
});
