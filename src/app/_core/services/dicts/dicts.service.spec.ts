import { TestBed } from '@angular/core/testing';

import { DictsService } from './dicts.service';

describe('DictsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DictsService = TestBed.get(DictsService);
    expect(service).toBeTruthy();
  });
});
