import { TestBed } from '@angular/core/testing';

import { DrupalnodeService } from './drupalnode.service';

describe('DrupalnodeService', () => {
  let service: DrupalnodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrupalnodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
