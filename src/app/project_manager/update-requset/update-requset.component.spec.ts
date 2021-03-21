import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRequsetComponent } from './update-requset.component';

describe('UpdateRequsetComponent', () => {
  let component: UpdateRequsetComponent;
  let fixture: ComponentFixture<UpdateRequsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRequsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRequsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
