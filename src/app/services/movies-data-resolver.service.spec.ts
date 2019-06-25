import { TestBed } from '@angular/core/testing';

import { MoviesDataResolverService } from './movies-data-resolver.service';

describe('MoviesDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoviesDataResolverService = TestBed.get(MoviesDataResolverService);
    expect(service).toBeTruthy();
  });
});
