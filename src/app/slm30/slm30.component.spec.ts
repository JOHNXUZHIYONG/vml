import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Slm30Component } from './slm30.component';

describe('Slm30Component', () => {
  let component: Slm30Component;
  let fixture: ComponentFixture<Slm30Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Slm30Component]
    });
    fixture = TestBed.createComponent(Slm30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
