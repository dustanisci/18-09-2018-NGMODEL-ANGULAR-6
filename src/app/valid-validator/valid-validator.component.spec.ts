import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidValidatorComponent } from './valid-validator.component';

describe('ValidValidatorComponent', () => {
  let component: ValidValidatorComponent;
  let fixture: ComponentFixture<ValidValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
