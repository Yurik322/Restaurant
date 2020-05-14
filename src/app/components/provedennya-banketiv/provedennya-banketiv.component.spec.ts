import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvedennyaBanketivComponent } from './provedennya-banketiv.component';

describe('ProvedennyaBanketivComponent', () => {
  let component: ProvedennyaBanketivComponent;
  let fixture: ComponentFixture<ProvedennyaBanketivComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvedennyaBanketivComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvedennyaBanketivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
