import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteMealComponent } from './vote-meal.component';

describe('VoteMealComponent', () => {
  let component: VoteMealComponent;
  let fixture: ComponentFixture<VoteMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
