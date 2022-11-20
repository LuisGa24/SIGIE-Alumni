import { TestBed } from '@angular/core/testing';

import { AreaDisciplinarService } from './area-disciplinar.service';

describe('AreaDisciplinarService', () => {
  let service: AreaDisciplinarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaDisciplinarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
