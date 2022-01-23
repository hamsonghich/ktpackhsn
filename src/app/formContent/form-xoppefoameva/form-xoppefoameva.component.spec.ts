import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormXoppefoamevaComponent } from './form-xoppefoameva.component';

describe('FormXoppefoamevaComponent', () => {
  let component: FormXoppefoamevaComponent;
  let fixture: ComponentFixture<FormXoppefoamevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormXoppefoamevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormXoppefoamevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
