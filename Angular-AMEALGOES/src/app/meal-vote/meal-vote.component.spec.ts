import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealVoteComponent } from './meal-vote.component';

describe('MealVoteComponent', () => {
  let component: MealVoteComponent;
  let fixture: ComponentFixture<MealVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealVoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
