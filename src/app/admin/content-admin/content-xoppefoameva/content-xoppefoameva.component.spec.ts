import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentXoppefoamevaComponent } from './content-xoppefoameva.component';

describe('ContentXoppefoamevaComponent', () => {
  let component: ContentXoppefoamevaComponent;
  let fixture: ComponentFixture<ContentXoppefoamevaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentXoppefoamevaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentXoppefoamevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
