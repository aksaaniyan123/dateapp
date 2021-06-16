import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayeventsComponent } from './displayevents.component';

describe('DisplayeventsComponent', () => {
  let component: DisplayeventsComponent;
  let fixture: ComponentFixture<DisplayeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayeventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
