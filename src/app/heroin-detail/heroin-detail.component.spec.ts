import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroinDetailComponent } from './heroin-detail.component';

describe('HeroinDetailComponent', () => {
  let component: HeroinDetailComponent;
  let fixture: ComponentFixture<HeroinDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroinDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
