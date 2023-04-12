import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoroiinesComponent } from './horoiines.component';

describe('HoroiinesComponent', () => {
  let component: HoroiinesComponent;
  let fixture: ComponentFixture<HoroiinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoroiinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoroiinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
