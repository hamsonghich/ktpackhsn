import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckDeleteComponent } from './check-delete.component';

describe('CheckDeleteComponent', () => {
  let component: CheckDeleteComponent;
  let fixture: ComponentFixture<CheckDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
