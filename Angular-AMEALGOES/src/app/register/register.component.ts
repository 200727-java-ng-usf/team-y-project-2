import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.registrationForm = this.formBuilder.group({
      // This validates the user email is alphanumeric and follows traditional email syntax abc123@gmail.com
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      username: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      password: [null, Validators.required]
    });

  }

  get formFields() {
    return this.registrationForm.controls;
  }

  register() {

    this.submitted=true;

    if (this.registrationForm.invalid) return;

    this.loading=true;








    // The below values are to demonstrate form data is properly collected and validated

    // let email = this.formFields.email.value;
    // let username = this.formFields.username.value;
    // let password = this.formFields.password.value;

    // console.log('These are the entered values:');
    // console.log(`Email: ${ email }`);
    // console.log(`Username: ${ username }`);
    // console.log(`Password: ${ password }`);
  }

}