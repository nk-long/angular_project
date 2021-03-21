import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequsetDetailsComponent } from './requset-details.component';

describe('RequsetDetailsComponent', () => {
  let component: RequsetDetailsComponent;
  let fixture: ComponentFixture<RequsetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequsetDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequsetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
