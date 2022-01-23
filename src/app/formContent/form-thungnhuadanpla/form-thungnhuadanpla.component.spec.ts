import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormThungnhuadanplaComponent } from './form-thungnhuadanpla.component';

describe('FormThungnhuadanplaComponent', () => {
  let component: FormThungnhuadanplaComponent;
  let fixture: ComponentFixture<FormThungnhuadanplaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormThungnhuadanplaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormThungnhuadanplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
