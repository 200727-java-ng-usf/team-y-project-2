import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { meal } from '../models/meal';
import { restaurant } from '../models/restaurant';
import { Vote } from '../models/vote';
import { AuthService } from '../services/auth.service';
import { MealService } from '../services/meal.service';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-vote-meal',
  templateUrl: './vote-meal.component.html',
  styleUrls: ['./vote-meal.component.css']
})
export class VoteMealComponent implements OnInit{

  currentResturantInt: number;
  meal: meal;
  currentResturant: restaurant;
  voteCount: number;

  

  constructor(private mealService: MealService, private authService: AuthService, private voteService: VoteService) { }

  

  async ngOnInit() {
    this.meal = <meal> await this.mealService.getResturants();
    this.currentResturantInt = 0;
    this.currentResturant = this.meal.restaurants[this.currentResturantInt];
    this.voteCount = this.meal.numVotes;
    console.log(this.currentResturant);

  }
  

  getNextResturantVote() {

    if (this.meal.restaurants[this.currentResturantInt] != undefined && this.voteCount != 1){
      let vote: Vote = {
        restaurant: this.currentResturant.id, //restaurant id, get resturant from api via id
        meal: this.meal.id, //meal id, get meal from api via id
        user: this.authService.currentUserValue.id, //user id
        vote: 1
      }
      
      this.voteService.sendVote(vote)
      .subscribe(
        () => {
          console.log('vote-successful');
        },
        err => {
          console.log(err);
        }
      );
  
      this.voteCount--
      this.currentResturantInt++;
      return this.currentResturant = this.meal.restaurants[this.currentResturantInt];



    } else if (this.voteCount == 1) {
      let vote = {
        restaurant: this.currentResturant.id, //restaurant id, get resturant from api via id
        meal: this.meal.id, //meal id, get meal from api via id
        user: this.authService.currentUserValue.id, //user id
        vote: 1 //0 or 1
      }
      
      this.voteService.sendVote(vote)
      .subscribe(
        () => {
          console.log('vote-successful');
        },
        err => {
          console.log(err);
        }
      );

      this.mealService.votingDone(this.authService.currentUserValue, this.mealService.currentMealValue)
      .subscribe(
        () => {
          console.log('voted-successful');
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.mealService.votingDone(this.authService.currentUserValue, this.mealService.currentMealValue)
      .subscribe(
        () => {
          console.log('voted-successful');
        },
        err => {
          console.log(err);
        }
      );
    }

    
    


  }

  getNextResturantSkip() {
    
    if (this.meal.restaurants[this.currentResturantInt] != undefined && this.voteCount != 1) {
      let vote = {
        restaurant: this.currentResturant.id, //restaurant id, get resturant from api via id
        meal: this.meal.id, //meal id, get meal from api via id
        user: this.authService.currentUserValue.id, //user id
        vote: 0 //0 or 1
      }

      this.voteService.sendVote(vote)
      .subscribe(
        () => {
          console.log('vote-successful');
        },
        err => {
          console.log(err);
        }
      );
  
      this.voteCount--
      this.currentResturantInt++;
      return this.currentResturant = this.meal.restaurants[this.currentResturantInt];


    } else if (this.voteCount == 1) {
      let vote = {
        restaurant: this.currentResturant.id, //restaurant id, get resturant from api via id
        meal: this.meal.id, //meal id, get meal from api via id
        user: this.authService.currentUserValue.id, //user id
        vote: 0 //0 or 1
      }

      this.voteService.sendVote(vote)
      .subscribe(
        () => {
          console.log('vote-successful');
        },
        err => {
          console.log(err);
        }
      );

      this.mealService.votingDone(this.authService.currentUserValue, this.mealService.currentMealValue)
      .subscribe(
        () => {
          console.log('vote-successful');
        },
        err => {
          console.log(err);
        }
      );
    } else {
      this.mealService.votingDone(this.authService.currentUserValue, this.mealService.currentMealValue)
      .subscribe(
        () => {
          console.log('vote-successful');
        },
        err => {
          console.log(err);
        }
      );
    }

    

  
    
  }



}
