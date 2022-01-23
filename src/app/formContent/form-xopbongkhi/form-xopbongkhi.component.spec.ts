import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormXopbongkhiComponent } from './form-xopbongkhi.component';

describe('FormXopbongkhiComponent', () => {
  let component: FormXopbongkhiComponent;
  let fixture: ComponentFixture<FormXopbongkhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormXopbongkhiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormXopbongkhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
