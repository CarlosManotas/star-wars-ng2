/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiciosService } from './servicios.service';

describe('Service: Servicios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiciosService]
    });
  });

  it('should ...', inject([ServiciosService], (service: ServiciosService) => {
    expect(service).toBeTruthy();
  }));
});
