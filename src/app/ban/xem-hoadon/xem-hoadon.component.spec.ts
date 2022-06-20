import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XemHoadonComponent } from './xem-hoadon.component';

describe('XemHoadonComponent', () => {
  let component: XemHoadonComponent;
  let fixture: ComponentFixture<XemHoadonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XemHoadonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XemHoadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
