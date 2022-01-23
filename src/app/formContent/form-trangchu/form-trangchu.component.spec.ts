import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTrangchuComponent } from './form-trangchu.component';

describe('FormTrangchuComponent', () => {
  let component: FormTrangchuComponent;
  let fixture: ComponentFixture<FormTrangchuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTrangchuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTrangchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
