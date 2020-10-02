import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { isImportSpecifier } from 'typescript';
import { MealService } from '../services/meal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-join-meal',
  templateUrl: './join-meal.component.html',
  styleUrls: ['./join-meal.component.css']
})
export class JoinMealComponent implements OnInit {


  joinMealForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private mealService: MealService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.joinMealForm = this.formBuilder.group({
      id: [null, [Validators.required]]
    })
  }


  get formFields() {
    return this.joinMealForm.controls;
  }

  joinMeal(){

    this.submitted = true;

    if (this.joinMealForm.invalid) return;

    this.mealService.joinMeal(this.authService.currentUserValue, this.formFields.id.value)
    .subscribe(
      () => {
        console.log('join-meal-successful');
      },
      err => {
        console.log(err);
        this.submitted = false;
      }
    );
      
    

  }
}
