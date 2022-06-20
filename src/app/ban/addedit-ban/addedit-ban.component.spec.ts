import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditBanComponent } from './addedit-ban.component';

describe('AddeditBanComponent', () => {
  let component: AddeditBanComponent;
  let fixture: ComponentFixture<AddeditBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditBanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
