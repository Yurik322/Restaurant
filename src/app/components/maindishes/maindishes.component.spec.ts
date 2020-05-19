import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindishesComponent } from './maindishes.component';

describe('MaindishesComponent', () => {
  let component: MaindishesComponent;
  let fixture: ComponentFixture<MaindishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaindishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
