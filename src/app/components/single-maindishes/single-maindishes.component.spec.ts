import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMaindishesComponent } from './single-maindishes.component';

describe('SingleMaindishesComponent', () => {
  let component: SingleMaindishesComponent;
  let fixture: ComponentFixture<SingleMaindishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMaindishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMaindishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
