import { TestBed } from '@angular/core/testing';

import { LibraryBranchesService } from './library-branches.service';

describe('LibraryBranchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryBranchesService = TestBed.get(LibraryBranchesService);
    expect(service).toBeTruthy();
  });
});
