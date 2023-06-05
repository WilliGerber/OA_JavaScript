import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnManagerComponent } from './learn-manager.component';

describe('LearnManagerComponent', () => {
  let component: LearnManagerComponent;
  let fixture: ComponentFixture<LearnManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LearnManagerComponent]
    });
    fixture = TestBed.createComponent(LearnManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
