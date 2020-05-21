import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWinesComponent } from './single-wines.component';

describe('SingleWinesComponent', () => {
  let component: SingleWinesComponent;
  let fixture: ComponentFixture<SingleWinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
