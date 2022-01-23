import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTintucComponent } from './form-tintuc.component';

describe('FormTintucComponent', () => {
  let component: FormTintucComponent;
  let fixture: ComponentFixture<FormTintucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTintucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
