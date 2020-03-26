import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieterminalComponent } from './movieterminal.component';

describe('MovieterminalComponent', () => {
  let component: MovieterminalComponent;
  let fixture: ComponentFixture<MovieterminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieterminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieterminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
