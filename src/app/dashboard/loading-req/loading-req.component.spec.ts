import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingReqComponent } from './loading-req.component';

describe('LoadingReqComponent', () => {
  let component: LoadingReqComponent;
  let fixture: ComponentFixture<LoadingReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
