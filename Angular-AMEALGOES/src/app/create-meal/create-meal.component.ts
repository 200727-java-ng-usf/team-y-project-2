import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MealService } from '../services/meal.service';
import { GoogleMapsConnectionService } from '../services/google-maps-connection.service';

@Component({
  selector: 'app-create-meal',
  templateUrl: './create-meal.component.html',
  styleUrls: ['./create-meal.component.css']
})
export class CreateMealComponent implements OnInit {

  newMealForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private mealService: MealService, private router: Router) { 

  }

  ngOnInit(): void {

    this.newMealForm = this.formBuilder.group({

      city: [null, Validators.required]

    });

  }

  get formFields() {
    return this.newMealForm.controls;
  }


  beginMeal(){

    this.submitted = true;

    //not sure about what this is
    //this.mealService.sendMeal(this.formFields.location.value);
    
    if (this.newMealForm.invalid) return;

    //need to get the value within city component, not sure how without getElementById
    //put new york temporarily
    let city = this.formFields.city.value;

    let gmcs = new GoogleMapsConnectionService;

    //replace 'new york' with 'philadelphia' to get the other option

    gmcs.getRestaurants(city).then(
      responce => {

        //testing what responce we got
        console.log('this is the name of the first restaurant in the list' + responce[0].name);
        console.log('this is the name of the last restaurant in the list' + responce[19].name);
        //do post request here to put restaurants in database IF they dont exist
      
      
    });

    // Uncomment when the service for connecting to the api is finished.
    // this.mealService.beginMeal(this.formFields.zip.value)
  }

}
