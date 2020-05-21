import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDesertsComponent } from './single-deserts.component';

describe('SingleDesertsComponent', () => {
  let component: SingleDesertsComponent;
  let fixture: ComponentFixture<SingleDesertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDesertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDesertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
