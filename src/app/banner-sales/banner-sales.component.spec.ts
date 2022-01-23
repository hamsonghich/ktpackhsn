import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSalesComponent } from './banner-sales.component';

describe('BannerSalesComponent', () => {
  let component: BannerSalesComponent;
  let fixture: ComponentFixture<BannerSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
