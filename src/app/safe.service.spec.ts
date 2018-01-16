import { TestBed, inject } from '@angular/core/testing';

import { SafeService } from './safe.service';

describe('SafeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SafeService]
    });
  });

  it('should be created', inject([SafeService], (service: SafeService) => {
    expect(service).toBeTruthy();
  }));
});
