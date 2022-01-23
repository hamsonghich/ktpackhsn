import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSocialComponent } from './content-social.component';

describe('ContentSocialComponent', () => {
  let component: ContentSocialComponent;
  let fixture: ComponentFixture<ContentSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
