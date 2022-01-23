import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfoCustomerComponent } from './form-info-customer.component';

describe('FormInfoCustomerComponent', () => {
  let component: FormInfoCustomerComponent;
  let fixture: ComponentFixture<FormInfoCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInfoCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInfoCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
