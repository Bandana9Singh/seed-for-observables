import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxAdventuresComponent } from './rx-adventures.component';

describe('RxAdventuresComponent', () => {
  let component: RxAdventuresComponent;
  let fixture: ComponentFixture<RxAdventuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxAdventuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxAdventuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
