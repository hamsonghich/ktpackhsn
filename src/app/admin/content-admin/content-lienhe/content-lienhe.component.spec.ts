import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLienheComponent } from './content-lienhe.component';

describe('ContentLienheComponent', () => {
  let component: ContentLienheComponent;
  let fixture: ComponentFixture<ContentLienheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentLienheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
