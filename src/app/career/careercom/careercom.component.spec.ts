import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareercomComponent } from './careercom.component';

describe('CareercomComponent', () => {
  let component: CareercomComponent;
  let fixture: ComponentFixture<CareercomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareercomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareercomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
