import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ntx500Component } from './ntx500.component';

describe('Ntx500Component', () => {
  let component: Ntx500Component;
  let fixture: ComponentFixture<Ntx500Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ntx500Component]
    });
    fixture = TestBed.createComponent(Ntx500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
