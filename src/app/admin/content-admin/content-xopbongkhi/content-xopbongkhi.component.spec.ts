import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentXopbongkhiComponent } from './content-xopbongkhi.component';

describe('ContentXopbongkhiComponent', () => {
  let component: ContentXopbongkhiComponent;
  let fixture: ComponentFixture<ContentXopbongkhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentXopbongkhiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentXopbongkhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
