import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobpostlistComponent } from './jobpostlist.component';

describe('JobpostlistComponent', () => {
  let component: JobpostlistComponent;
  let fixture: ComponentFixture<JobpostlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobpostlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobpostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
