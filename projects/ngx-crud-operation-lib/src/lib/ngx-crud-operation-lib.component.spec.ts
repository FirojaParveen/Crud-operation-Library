import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCrudOperationLibComponent } from './ngx-crud-operation-lib.component';

describe('NgxCrudOperationLibComponent', () => {
  let component: NgxCrudOperationLibComponent;
  let fixture: ComponentFixture<NgxCrudOperationLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCrudOperationLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCrudOperationLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
