import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShwDynamicTableComponent } from './shw-dynamic-table.component';

describe('ShwDynamicTableComponent', () => {
  let component: ShwDynamicTableComponent;
  let fixture: ComponentFixture<ShwDynamicTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShwDynamicTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShwDynamicTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
