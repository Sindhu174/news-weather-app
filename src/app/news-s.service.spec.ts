import { TestBed } from '@angular/core/testing';

import { NewsSService } from './news-s.service';

describe('NewsSService', () => {
  let service: NewsSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
