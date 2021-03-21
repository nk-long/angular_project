import { TestBed } from '@angular/core/testing';

import { AssessmentDetailService } from './assessment-detail.service';

describe('AssessmentDetailService', () => {
  let service: AssessmentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
