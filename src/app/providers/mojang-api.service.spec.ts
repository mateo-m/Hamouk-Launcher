import { TestBed } from '@angular/core/testing';

import { MojangApiService } from './mojang-api.service';

describe('MojangApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MojangApiService = TestBed.get(MojangApiService);
    expect(service).toBeTruthy();
  });
});
