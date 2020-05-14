import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalereyaComponent } from './galereya.component';

describe('GalereyaComponent', () => {
  let component: GalereyaComponent;
  let fixture: ComponentFixture<GalereyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalereyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalereyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
