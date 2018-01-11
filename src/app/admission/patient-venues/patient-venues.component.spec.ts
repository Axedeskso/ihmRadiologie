import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientVenuesComponent } from './patient-venues.component';

describe('PatientVenuesComponent', () => {
  let component: PatientVenuesComponent;
  let fixture: ComponentFixture<PatientVenuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientVenuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientVenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
