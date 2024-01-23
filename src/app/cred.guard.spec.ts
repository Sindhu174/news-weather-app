import { TestBed } from '@angular/core/testing';

import { CredGuard } from './cred.guard';

describe('CredGuard', () => {
  let guard: CredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
