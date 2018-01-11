import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesActesComponent } from './venues-actes.component';

describe('VenuesActesComponent', () => {
  let component: VenuesActesComponent;
  let fixture: ComponentFixture<VenuesActesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuesActesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesActesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
