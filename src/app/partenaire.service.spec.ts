import { TestBed, inject } from '@angular/core/testing';

import { PartenaireService } from './partenaire.service';

describe('PartenaireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartenaireService]
    });
  });

  it('should be created', inject([PartenaireService], (service: PartenaireService) => {
    expect(service).toBeTruthy();
  }));
});
