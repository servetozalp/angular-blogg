import { TestBed } from '@angular/core/testing';

import { BlogRepositoryService } from './blog-repository.service';

describe('BlogRepositoryService', () => {
  let service: BlogRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
