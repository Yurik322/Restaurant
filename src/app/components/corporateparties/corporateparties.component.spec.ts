import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatepartiesComponent } from './corporateparties.component';

describe('CorporatepartiesComponent', () => {
  let component: CorporatepartiesComponent;
  let fixture: ComponentFixture<CorporatepartiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporatepartiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatepartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
