import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1ComponentComponent } from './f1-component.component';

describe('F1ComponentComponent', () => {
  let component: F1ComponentComponent;
  let fixture: ComponentFixture<F1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F1ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
