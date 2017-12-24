import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CcamComponent } from './ccam.component';

describe('CcamComponent', () => {
  let component: CcamComponent;
  let fixture: ComponentFixture<CcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
