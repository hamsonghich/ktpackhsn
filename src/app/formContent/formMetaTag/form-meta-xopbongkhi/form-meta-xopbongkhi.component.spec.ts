import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMetaXopbongkhiComponent } from './form-meta-xopbongkhi.component';

describe('FormMetaXopbongkhiComponent', () => {
  let component: FormMetaXopbongkhiComponent;
  let fixture: ComponentFixture<FormMetaXopbongkhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMetaXopbongkhiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMetaXopbongkhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
