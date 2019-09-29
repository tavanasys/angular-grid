import { TestBed } from '@angular/core/testing';

import { ShwDynamicTableService } from './shw-dynamic-table.service';

describe('ShwDynamicTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShwDynamicTableService = TestBed.get(ShwDynamicTableService);
    expect(service).toBeTruthy();
  });
});
