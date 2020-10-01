import { Component, OnInit } from '@angular/core';
import { meal } from '../models/meal';
import { restaurant } from '../models/restaurant';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  currentResturantInt: number;
  meal: meal;
  currentResturant: restaurant;
  

  constructor(private mealService: MealService) { }

  async ngOnInit(): Promise<void> {
    this.meal = <meal> await this.mealService.retrieveWinningRestauarant();
    this.currentResturantInt = 0;
  }

  authenticatedUserLinks = [
    {
      linkName: 'Home',
      fragment: '/home'
    },
    {
      linkName: 'New Meal',
      fragment: '/newMeal'
    }
  ]

}
