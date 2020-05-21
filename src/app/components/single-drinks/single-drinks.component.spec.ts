import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDrinksComponent } from './single-drinks.component';

describe('SingleDrinksComponent', () => {
  let component: SingleDrinksComponent;
  let fixture: ComponentFixture<SingleDrinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDrinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
