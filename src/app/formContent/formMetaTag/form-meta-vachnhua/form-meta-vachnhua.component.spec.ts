import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMetaVachnhuaComponent } from './form-meta-vachnhua.component';

describe('FormMetaVachnhuaComponent', () => {
  let component: FormMetaVachnhuaComponent;
  let fixture: ComponentFixture<FormMetaVachnhuaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMetaVachnhuaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMetaVachnhuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
