import { TestBed } from '@angular/core/testing';

import { FlorService } from './flor.service';

describe('FlorService', () => {
  let service: FlorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
