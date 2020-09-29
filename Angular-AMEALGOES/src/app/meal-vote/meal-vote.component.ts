import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-meal-vote',
  templateUrl: './meal-vote.component.html',
  styleUrls: ['./meal-vote.component.css']
})
export class MealVoteComponent implements OnInit {

  currentResturant: number;

  constructor(private mealService: MealService, private router: Router) { }

  resturants = [];
  
  async ngOnInit() {
    let resturantList = <String[]> <unknown>await this.mealService.getResturants();
    this.currentResturant = 0;

    for (let resturant of resturantList) {
      this.resturants.push(resturant);
    }

  }
  

  getNextResturant() {
    this.currentResturant++;
    
    return this.resturants[this.currentResturant];
    
    
  }
}
