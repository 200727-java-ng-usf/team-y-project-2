import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { restaurant } from '../models/restaurant';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-vote-meal',
  templateUrl: './vote-meal.component.html',
  styleUrls: ['./vote-meal.component.css']
})
export class VoteMealComponent implements OnInit{

  currentResturant: number;

  constructor(private mealService: MealService) { }

  resturants: String[] = [];
  
  async ngOnInit() {
    //help
    let resturantList = <String[]> <unknown> await this.mealService.getResturants();
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
