import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGioithieuComponent } from './form-gioithieu.component';

describe('FormGioithieuComponent', () => {
  let component: FormGioithieuComponent;
  let fixture: ComponentFixture<FormGioithieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGioithieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGioithieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
