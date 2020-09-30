import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MealService } from '../services/meal.service';
import { GoogleMapsConnectionService } from '../services/google-maps-connection.service';
import { map } from 'rxjs/operators';

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

      mealname: [null, Validators.required],
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
    let mealName = this.formFields.mealname.value;
    
    
    let meal = {
        mealName:mealName
    }
    
    let mealId;

    this.mealService.sendMeal(meal).pipe(
        map(resp => {
          let mealId = resp;
          console.log(mealId + "<-- this is the meal id");
        })
      );

    console.log(mealId + "mealId 2");

    let gmcs = new GoogleMapsConnectionService;
    

    console.log("meal created mealId " + mealId);//replace 'new york' with 'philadelphia' to get the other option
    
    gmcs.getRestaurants(city).then(
      responce => {

        //testing what responce we got
        console.log('this is the name of the first restaurant in the list' + responce[0].name);
        console.log('this is the name of the last restaurant in the list' + responce[19].name);
        

        console.log("meal created mealId in responce " + mealId);
        
      
      
    });

    // Uncomment when the service for connecting to the api is finished.
    // this.mealService.beginMeal(this.formFields.zip.value)
  }

}
