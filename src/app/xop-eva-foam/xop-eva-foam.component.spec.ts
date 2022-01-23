import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XopEvaFoamComponent } from './xop-eva-foam.component';

describe('XopEvaFoamComponent', () => {
  let component: XopEvaFoamComponent;
  let fixture: ComponentFixture<XopEvaFoamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XopEvaFoamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XopEvaFoamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
