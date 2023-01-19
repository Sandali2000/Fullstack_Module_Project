import { TestBed } from '@angular/core/testing';

import { ReceivedBookService } from './receivedBook.service';

describe('ReceivedBookService', () => {
  let service: ReceivedBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceivedBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
