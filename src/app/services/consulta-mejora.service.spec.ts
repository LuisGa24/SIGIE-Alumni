import { TestBed } from '@angular/core/testing';

import { ConsultaMejoraService } from './consulta-mejora.service';

describe('ConsultaMejoraService', () => {
  let service: ConsultaMejoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaMejoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
