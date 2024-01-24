import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lt65Component } from './lt65.component';

describe('Lt65Component', () => {
  let component: Lt65Component;
  let fixture: ComponentFixture<Lt65Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lt65Component]
    });
    fixture = TestBed.createComponent(Lt65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
