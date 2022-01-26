import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMetaThungnhuaComponent } from './form-meta-thungnhua.component';

describe('FormMetaThungnhuaComponent', () => {
  let component: FormMetaThungnhuaComponent;
  let fixture: ComponentFixture<FormMetaThungnhuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMetaThungnhuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMetaThungnhuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
