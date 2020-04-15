import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAnnuityComponent } from './create-annuity.component';

describe('CreateAnnuityComponent', () => {
  let component: CreateAnnuityComponent;
  let fixture: ComponentFixture<CreateAnnuityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAnnuityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAnnuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
