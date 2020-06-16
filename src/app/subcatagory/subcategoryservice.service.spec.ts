import { TestBed } from '@angular/core/testing';

import { SubcategoryserviceService } from './subcategoryservice.service';

describe('SubcategoryserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubcategoryserviceService = TestBed.get(SubcategoryserviceService);
    expect(service).toBeTruthy();
  });
});
