import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectRequestComponent } from './view-project-request.component';

describe('ViewProjectRequestComponent', () => {
  let component: ViewProjectRequestComponent;
  let fixture: ComponentFixture<ViewProjectRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProjectRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProjectRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
