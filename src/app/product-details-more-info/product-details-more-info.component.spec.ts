import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsMoreInfoComponent } from './product-details-more-info.component';

describe('ProductDetailsMoreInfoComponent', () => {
  let component: ProductDetailsMoreInfoComponent;
  let fixture: ComponentFixture<ProductDetailsMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsMoreInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
