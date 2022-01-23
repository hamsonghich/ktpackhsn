import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XopbongkhiComponent } from './xopbongkhi.component';

describe('XopbongkhiComponent', () => {
  let component: XopbongkhiComponent;
  let fixture: ComponentFixture<XopbongkhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XopbongkhiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XopbongkhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
