import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTrangchuComponent } from './content-trangchu.component';

describe('ContentTrangchuComponent', () => {
  let component: ContentTrangchuComponent;
  let fixture: ComponentFixture<ContentTrangchuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTrangchuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTrangchuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
