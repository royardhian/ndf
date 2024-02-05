import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopPopUpComponent } from './workshop-pop-up.component';

describe('WorkshopPopUpComponent', () => {
  let component: WorkshopPopUpComponent;
  let fixture: ComponentFixture<WorkshopPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkshopPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
