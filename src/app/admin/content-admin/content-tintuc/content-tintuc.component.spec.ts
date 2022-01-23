import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTintucComponent } from './content-tintuc.component';

describe('ContentTintucComponent', () => {
  let component: ContentTintucComponent;
  let fixture: ComponentFixture<ContentTintucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTintucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTintucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
