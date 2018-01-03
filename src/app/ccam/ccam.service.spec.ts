import { TestBed, inject } from '@angular/core/testing';

import { CcamService } from './ccam.service';

describe('CcamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CcamService]
    });
  });

  it('should be created', inject([CcamService], (service: CcamService) => {
    expect(service).toBeTruthy();
  }));
});
