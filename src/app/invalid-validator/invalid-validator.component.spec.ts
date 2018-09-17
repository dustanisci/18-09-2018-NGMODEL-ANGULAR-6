import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidValidatorComponent } from './invalid-validator.component';

describe('InvalidValidatorComponent', () => {
  let component: InvalidValidatorComponent;
  let fixture: ComponentFixture<InvalidValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvalidValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
