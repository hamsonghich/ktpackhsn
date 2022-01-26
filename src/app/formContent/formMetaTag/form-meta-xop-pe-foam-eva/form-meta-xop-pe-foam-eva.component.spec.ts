import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMetaXopPeFoamEvaComponent } from './form-meta-xop-pe-foam-eva.component';

describe('FormMetaXopPeFoamEvaComponent', () => {
  let component: FormMetaXopPeFoamEvaComponent;
  let fixture: ComponentFixture<FormMetaXopPeFoamEvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMetaXopPeFoamEvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMetaXopPeFoamEvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
