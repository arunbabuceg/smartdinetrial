import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Features4Component } from './features-4.component';

describe('Features4Component', () => {
  let component: Features4Component;
  let fixture: ComponentFixture<Features4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Features4Component]
    });
    fixture = TestBed.createComponent(Features4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
