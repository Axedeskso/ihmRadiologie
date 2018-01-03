import { TestBed, inject } from '@angular/core/testing';

import { ModaliteService } from './modalite.service';

describe('ModaliteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModaliteService]
    });
  });

  it('should be created', inject([ModaliteService], (service: ModaliteService) => {
    expect(service).toBeTruthy();
  }));
});
