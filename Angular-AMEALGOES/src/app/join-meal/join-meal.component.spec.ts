import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinMealComponent } from './join-meal.component';

describe('JoinMealComponent', () => {
  let component: JoinMealComponent;
  let fixture: ComponentFixture<JoinMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
