import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { meal } from '../models/meal';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-vote-meal',
  templateUrl: './vote-meal.component.html',
  styleUrls: ['./vote-meal.component.css']
})
export class VoteMealComponent implements OnInit{

  currentResturant: number;
  resturants: meal;

  constructor(private mealService: MealService) { }

  

  async ngOnInit() {
    this.resturants = <meal> await this.mealService.getResturants();
    this.currentResturant = 0;
    
    

  }
  

  getNextResturant() {
    this.currentResturant++;
    
    if (this.resturants.restaurants[this.currentResturant] != null) {
      return this.resturants.restaurants[this.currentResturant];
    } else {
      //voting done?
    }
    
    
  }



}
