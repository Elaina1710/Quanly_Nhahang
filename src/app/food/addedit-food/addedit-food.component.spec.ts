import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditFoodComponent } from './addedit-food.component';

describe('AddeditFoodComponent', () => {
  let component: AddeditFoodComponent;
  let fixture: ComponentFixture<AddeditFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
