import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join-meal',
  templateUrl: './join-meal.component.html',
  styleUrls: ['./join-meal.component.css']
})
export class JoinMealComponent implements OnInit {
  [x: string]: any;


  joinMealForm: FormGroup;
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    this.joinMealForm = this.formBuilder.group({
      id: [null, [Validators.required]]
    })
  }


  joinMeal(){

    this.submitted = true;

    if (this.joinMealForm.invalid) return;

    // Uncomment when the service for connecting to the api is finished.
    //this.mealService.joinMeal(this.formFields.id.value)
      
    

  }
}
