import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTieudeMainComponent } from './content-tieude-main.component';

describe('ContentTieudeMainComponent', () => {
  let component: ContentTieudeMainComponent;
  let fixture: ComponentFixture<ContentTieudeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTieudeMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTieudeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
