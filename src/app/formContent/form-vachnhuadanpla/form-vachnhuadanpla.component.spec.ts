import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVachnhuadanplaComponent } from './form-vachnhuadanpla.component';

describe('FormVachnhuadanplaComponent', () => {
  let component: FormVachnhuadanplaComponent;
  let fixture: ComponentFixture<FormVachnhuadanplaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVachnhuadanplaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVachnhuadanplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
