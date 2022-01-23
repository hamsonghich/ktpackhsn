import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentGioithieuComponent } from './content-gioithieu.component';

describe('ContentGioithieuComponent', () => {
  let component: ContentGioithieuComponent;
  let fixture: ComponentFixture<ContentGioithieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentGioithieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentGioithieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
