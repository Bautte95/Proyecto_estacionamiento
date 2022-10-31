import { TestBed } from '@angular/core/testing';

import { CalculoTiempoService } from './calculo-tiempo.service';

describe('CalculoTiempoService', () => {
  let service: CalculoTiempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoTiempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
