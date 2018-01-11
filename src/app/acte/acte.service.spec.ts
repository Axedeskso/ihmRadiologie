import { TestBed, inject } from '@angular/core/testing';

import { ActeService } from './acte.service';

describe('ActeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActeService]
    });
  });

  it('should be created', inject([ActeService], (service: ActeService) => {
    expect(service).toBeTruthy();
  }));
});
