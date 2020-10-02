import { ThrowStmt } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { meal } from '../models/meal';
import { restaurant } from '../models/restaurant';
import { Vote } from '../models/vote';
import { votestatus } from '../models/votestatus';
import { AuthService } from '../services/auth.service';
import { LikeService } from '../services/like.service';
import { MealService } from '../services/meal.service';
import { MessageService } from '../services/message.service';
import { VoteService } from '../services/vote.service';
import { LikeComponent } from '../like/like.component';

@Component({
  selector: 'app-vote-meal',
  templateUrl: './vote-meal.component.html',
  styleUrls: ['./vote-meal.component.css']
})
export class VoteMealComponent implements OnInit, AfterViewInit{
  [x: string]: any;

  currentResturantInt: number;
  meal: meal;
  currentResturant: restaurant;
  voteCount: number;
  mealid: number;

  @ViewChild(LikeComponent) likeComp: LikeComponent;

  ngAfterViewInit() {
    console.log(this.likeComp.setUpLike());
  }

  

  constructor(private mealService: MealService, private authService: AuthService, 
    private voteService: VoteService, private messageService: MessageService, private router: Router, private likeService: LikeService) {
      
    }

  

  async ngOnInit() {
    this.meal = <meal> await this.mealService.getResturants();
    this.currentResturantInt = 0;
    this.currentResturant = this.meal.restaurants[this.currentResturantInt];
    this.voteCount = this.meal.numVotes;
    
    this.setupLikeButton();


    this.messageService.stompClient.subscribe('/vote-message', (message) => {
      let voteStatus = JSON.parse(message.body);
      console.log(message.body);
      console.log(voteStatus);
      console.log('IM SUBSCRIBED');
      console.log(voteStatus.mealVotingFinished);
      this.mealService.mealCode = voteStatus.mealId;
      this.setupLikeButton();
    if (voteStatus.mealVotingFinished == 1) {
      this.router.navigate(['/results']);
    }
    });
  }
  

  getNextResturantVote() {
    // this.likeService.setCurrentRestaurant(this.currentResturant.place);
      let vote: Vote = {
        restaurant: this.currentResturant.id, //restaurant id, get resturant from api via id
        meal: this.meal.id, //meal id, get meal from api via id
        user: this.authService.currentUserValue.id, //user id
        vote: 1
      }
      
      this.voteService.sendVote(vote);
    
  
      this.voteCount--
      this.currentResturantInt++;
      this.currentResturant = this.meal.restaurants[this.currentResturantInt];
      console.log(this.currentResturant.place);
      this.setupLikeButton();
      
      return this.currentResturant;
  }

  getNextResturantSkip() {
  
      let vote = {
        restaurant: this.currentResturant.id, //restaurant id, get resturant from api via id
        meal: this.meal.id, //meal id, get meal from api via id
        user: this.authService.currentUserValue.id, //user id
        vote: 0 //0 or 1
      }

      this.voteService.sendVote(vote);
  
      this.voteCount--
      this.currentResturantInt++;
      this.currentResturant = this.meal.restaurants[this.currentResturantInt];
      this.setupLikeButton();
      // this.likeService.setCurrentRestaurant(this.currentResturant.place);
      return this.currentResturant;
    }

  setupLikeButton() {
    if(this.currentResturant){
      this.likeService.setCurrentRestaurant(this.currentResturant.id);
    }
    this.likeComp.setUpLike();
    
  }

  
    
  }