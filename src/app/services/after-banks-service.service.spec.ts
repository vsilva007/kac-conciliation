import { TestBed, inject } from '@angular/core/testing';

import { AfterBanksService } from './after-banks-service.service';

describe('AfterBanksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfterBanksService]
    });
  });

  it('should be created', inject([AfterBanksService], (service: AfterBanksService) => {
    expect(service).toBeTruthy();
  }));
});
