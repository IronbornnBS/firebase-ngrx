import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityListComponent } from './annuity-list.component';

describe('AnnuityListComponent', () => {
  let component: AnnuityListComponent;
  let fixture: ComponentFixture<AnnuityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
