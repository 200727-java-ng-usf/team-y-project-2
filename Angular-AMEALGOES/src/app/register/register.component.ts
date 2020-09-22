import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  loading = true;
  submitted = false;

  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.registrationForm = this.FormBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  get formFields() {
    return this.registrationForm.controls;
  }

  register() {

  }

}
