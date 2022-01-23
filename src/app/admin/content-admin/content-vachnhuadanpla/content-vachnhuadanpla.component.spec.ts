import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentVachnhuadanplaComponent } from './content-vachnhuadanpla.component';

describe('ContentVachnhuadanplaComponent', () => {
  let component: ContentVachnhuadanplaComponent;
  let fixture: ComponentFixture<ContentVachnhuadanplaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentVachnhuadanplaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentVachnhuadanplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
