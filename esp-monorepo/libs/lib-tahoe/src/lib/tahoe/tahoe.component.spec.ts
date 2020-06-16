import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TahoeComponent } from './tahoe.component';

describe('TahoeComponent', () => {
  let component: TahoeComponent;
  let fixture: ComponentFixture<TahoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TahoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TahoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
