import { TestBed } from '@angular/core/testing';

import { NgxCrudOperationLibService } from './ngx-crud-operation-lib.service';

describe('NgxCrudOperationLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCrudOperationLibService = TestBed.get(NgxCrudOperationLibService);
    expect(service).toBeTruthy();
  });
});
