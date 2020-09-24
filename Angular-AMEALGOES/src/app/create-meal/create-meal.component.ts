import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-meal',
  templateUrl: './create-meal.component.html',
  styleUrls: ['./create-meal.component.css']
})
export class CreateMealComponent implements OnInit {

  newMealForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { 

  }

  ngOnInit(): void {

    this.newMealForm = this.formBuilder.group({
      zip: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
    });

  }

  get formFields() {
    return this.newMealForm.controls;
  }

  beginMeal(){
    this.submitted = true;
    console.log(this.formFields.zip.value);

  }

}
