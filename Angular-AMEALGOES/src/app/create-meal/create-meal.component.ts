import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MealService } from '../services/meal.service';
import { GoogleMapsConnectionService } from '../services/google-maps-connection.service';
import { map } from 'rxjs/operators';
import { RestaurantService } from '../services/restaurant.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-meal',
  templateUrl: './create-meal.component.html',
  styleUrls: ['./create-meal.component.css']
})
export class CreateMealComponent implements OnInit {

  newMealForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private mealService: MealService, private restaurantService: RestaurantService, private router: Router, private authService: AuthService, private googleMapsConnectionService:GoogleMapsConnectionService) { 

  }

  ngOnInit(): void {

    this.newMealForm = this.formBuilder.group({

      mealname: [null, Validators.required],
      city: [null, Validators.required],
      numvotes:[null, Validators.required]

    });

  }

  get formFields() {
    return this.newMealForm.controls;
  }


  async beginMeal(){

    this.submitted = true;

    //not sure about what this is
    //this.mealService.sendMeal(this.formFields.location.value);
    
    if (this.newMealForm.invalid) return;

    

    //need to get the value within city component, not sure how without getElementById
    //put new york temporarily
    let city = this.formFields.city.value;
    let mealName = this.formFields.mealname.value;
    let numVotes = this.formFields.numvotes.value;

    //let gmcs = new GoogleMapsConnectionService;
    
    let restaurants = await this.googleMapsConnectionService.getRestaurants(city).then( responce => { return responce });

    console.log("first restaurant name " + restaurants[0].meal);
    
    let meal = {
      "mealName" : mealName,
      "numVotes" : numVotes,
      "restaurants" : restaurants
    
    }

    console.log("Stringified meal " + JSON.stringify(meal));
    

    let mealId = await this.mealService.sendMeal(meal).then(resp2 => {
      
      return resp2;
      
      });

      this.joinMeal(mealId)
    //await this.restaurantService.sendRestaurantList(restaurants);//works!!

  }

  joinMeal(mealId: number){

    this.submitted = true;

    this.mealService.joinMeal(this.authService.currentUserValue, mealId)
    .subscribe(
      () => {
        console.log('join-meal-successful');
        console.log('Navigating to meal voting...');
        this.router.navigate(['/voteMeal']);
      },
      err => {
        console.log(err);
        this.submitted = false;
      }
    );
      
    

  }

}