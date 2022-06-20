import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatMonComponent } from './dat-mon.component';

describe('DatMonComponent', () => {
  let component: DatMonComponent;
  let fixture: ComponentFixture<DatMonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatMonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatMonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
