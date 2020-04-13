import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintainanceListComponent } from './maintainance-list.component';

describe('MaintainanceListComponent', () => {
  let component: MaintainanceListComponent;
  let fixture: ComponentFixture<MaintainanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintainanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintainanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
