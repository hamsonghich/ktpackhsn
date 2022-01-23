import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentThungnhuadanplaComponent } from './content-thungnhuadanpla.component';

describe('ContentThungnhuadanplaComponent', () => {
  let component: ContentThungnhuadanplaComponent;
  let fixture: ComponentFixture<ContentThungnhuadanplaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentThungnhuadanplaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentThungnhuadanplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
