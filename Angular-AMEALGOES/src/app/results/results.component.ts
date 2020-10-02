import { Component, OnInit } from '@angular/core';
import { result } from '../models/results';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  result: result;
  mealCode: number;
  

  constructor(private mealService: MealService) { }

  async ngOnInit(): Promise<void> {
    this.result = <result> await this.mealService.retrieveWinningRestauarant();
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
