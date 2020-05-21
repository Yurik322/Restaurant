import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleGalleriesComponent } from './single-galleries.component';

describe('SingleGalleriesComponent', () => {
  let component: SingleGalleriesComponent;
  let fixture: ComponentFixture<SingleGalleriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleGalleriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
