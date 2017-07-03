import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicObservablesComponent } from './basic-observables.component';

describe('BasicObservablesComponent', () => {
  let component: BasicObservablesComponent;
  let fixture: ComponentFixture<BasicObservablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicObservablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
