import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHeaderMobileComponent } from './menu-header-mobile.component';

describe('MenuHeaderMobileComponent', () => {
  let component: MenuHeaderMobileComponent;
  let fixture: ComponentFixture<MenuHeaderMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHeaderMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHeaderMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
