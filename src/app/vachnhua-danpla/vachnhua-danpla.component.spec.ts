import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VachnhuaDanplaComponent } from './vachnhua-danpla.component';

describe('VachnhuaDanplaComponent', () => {
  let component: VachnhuaDanplaComponent;
  let fixture: ComponentFixture<VachnhuaDanplaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VachnhuaDanplaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VachnhuaDanplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
