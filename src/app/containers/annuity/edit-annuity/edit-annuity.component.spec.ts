import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAnnuityComponent } from './edit-annuity.component';

describe('EditAnnuityComponent', () => {
  let component: EditAnnuityComponent;
  let fixture: ComponentFixture<EditAnnuityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAnnuityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAnnuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
