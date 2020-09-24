import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MealService } from '../services/meal.service';

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
      zip: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5), Validators.pattern(/^[0-9]\d*$/)]],
    });

  }

  get formFields() {
    return this.newMealForm.controls;
  }

  beginMeal(){

    this.submitted = true;

    if (this.newMealForm.invalid) return;

    // Uncomment when the service for connecting to the api is finished.
    //this.mealService.beginMeal(this.formFields.zip.value)
      
    

  }

}
