import { TestBed } from '@angular/core/testing';

import { HomeserviceService } from './homeservice.service';

describe('HomeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeserviceService = TestBed.get(HomeserviceService);
    expect(service).toBeTruthy();
  });
});
