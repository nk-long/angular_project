import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostdisplayComponent } from './jobpostdisplay.component';

describe('JobpostdisplayComponent', () => {
  let component: JobpostdisplayComponent;
  let fixture: ComponentFixture<JobpostdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobpostdisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
