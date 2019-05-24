import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryBranchesComponent } from './library-branches.component';

describe('LibraryBranchesComponent', () => {
  let component: LibraryBranchesComponent;
  let fixture: ComponentFixture<LibraryBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
