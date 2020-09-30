import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { meal } from '../models/meal';
import { restaurant } from '../models/restaurant';
import { MealService } from '../services/meal.service';

@Component({
  selector: 'app-vote-meal',
  templateUrl: './vote-meal.component.html',
  styleUrls: ['./vote-meal.component.css']
})
export class VoteMealComponent implements OnInit{

  currentResturantInt: number;
  resturants: meal;
  currentResturant: restaurant;

  

  constructor(private mealService: MealService) { }

  

  async ngOnInit() {
    this.resturants = <meal> await this.mealService.getResturants();
    this.currentResturantInt = 0;
    this.currentResturant = this.resturants.restaurants[this.currentResturantInt];
    console.log(this.currentResturant);

  }
  

  getNextResturantVote() {
    this.currentResturantInt++;
    


    if (this.resturants.restaurants[this.currentResturantInt] != null) {
      return this.currentResturant = this.resturants.restaurants[this.currentResturantInt];
    } else {
      //voting done?
    }
    
  }

  getNextResturantSkip() {
    this.currentResturantInt++;
    


    if (this.resturants.restaurants[this.currentResturantInt] != null) {
      return this.currentResturant = this.resturants.restaurants[this.currentResturantInt];
    } else {
      //voting done?
    }
    
  }



}
