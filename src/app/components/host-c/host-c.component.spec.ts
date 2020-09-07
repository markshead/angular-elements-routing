import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostCComponent } from './host-c.component';

describe('HostCComponent', () => {
  let component: HostCComponent;
  let fixture: ComponentFixture<HostCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
