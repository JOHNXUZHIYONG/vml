import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaasComponent } from './haas.component';

describe('HaasComponent', () => {
  let component: HaasComponent;
  let fixture: ComponentFixture<HaasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaasComponent]
    });
    fixture = TestBed.createComponent(HaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
