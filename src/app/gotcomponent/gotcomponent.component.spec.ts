import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GOTComponentComponent } from './gotcomponent.component';

describe('GOTComponentComponent', () => {
  let component: GOTComponentComponent;
  let fixture: ComponentFixture<GOTComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GOTComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GOTComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
