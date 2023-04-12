import { TestBed } from '@angular/core/testing';

import { HeroinService } from './heroin.service';

describe('HeroinService', () => {
  let service: HeroinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
