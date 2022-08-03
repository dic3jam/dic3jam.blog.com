import { TestBed } from '@angular/core/testing';

import { BlogPostReaperService } from './blog-post-reaper.service';

describe('BlogPostReaperService', () => {
  let service: BlogPostReaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPostReaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
