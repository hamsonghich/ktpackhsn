import { TestBed } from '@angular/core/testing';

import { DataJsonServerService } from './data-json-server.service';

describe('DataJsonServerService', () => {
  let service: DataJsonServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataJsonServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
