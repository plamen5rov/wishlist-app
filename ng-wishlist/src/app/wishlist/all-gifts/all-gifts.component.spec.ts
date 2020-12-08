import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGiftsComponent } from './all-gifts.component';

describe('AllGiftsComponent', () => {
  let component: AllGiftsComponent;
  let fixture: ComponentFixture<AllGiftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGiftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
