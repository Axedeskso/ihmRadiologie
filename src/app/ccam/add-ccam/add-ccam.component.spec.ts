import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCcamComponent } from './add-ccam.component';

describe('AddCcamComponent', () => {
  let component: AddCcamComponent;
  let fixture: ComponentFixture<AddCcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
