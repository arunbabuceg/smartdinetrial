import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Features1Component } from './features-1.component';

describe('Features1Component', () => {
  let component: Features1Component;
  let fixture: ComponentFixture<Features1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Features1Component]
    });
    fixture = TestBed.createComponent(Features1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
