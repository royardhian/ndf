import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoPopUpComponent } from './promo-pop-up.component';

describe('PromoPopUpComponent', () => {
  let component: PromoPopUpComponent;
  let fixture: ComponentFixture<PromoPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromoPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
