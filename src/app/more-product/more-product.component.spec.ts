import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreProductComponent } from './more-product.component';

describe('MoreProductComponent', () => {
  let component: MoreProductComponent;
  let fixture: ComponentFixture<MoreProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
