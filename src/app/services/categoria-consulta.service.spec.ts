import { TestBed } from '@angular/core/testing';

import { CategoriaConsultaService } from './categoria-consulta.service';

describe('CategoriaConsultaService', () => {
  let service: CategoriaConsultaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriaConsultaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
