import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThungnhuaDanplaComponent } from './thungnhua-danpla.component';

describe('ThungnhuaDanplaComponent', () => {
  let component: ThungnhuaDanplaComponent;
  let fixture: ComponentFixture<ThungnhuaDanplaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThungnhuaDanplaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThungnhuaDanplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
