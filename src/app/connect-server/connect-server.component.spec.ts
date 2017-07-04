import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectServerComponent } from './connect-server.component';

describe('ConnectServerComponent', () => {
  let component: ConnectServerComponent;
  let fixture: ComponentFixture<ConnectServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
