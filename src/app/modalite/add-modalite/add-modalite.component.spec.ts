import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModaliteComponent } from './add-modalite.component';

describe('AddModaliteComponent', () => {
  let component: AddModaliteComponent;
  let fixture: ComponentFixture<AddModaliteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddModaliteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
