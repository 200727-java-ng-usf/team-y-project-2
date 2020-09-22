import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  loading = false;
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
    let firstName = this.formFields.firstName.value;
    let lastName = this.formFields.lastName.value;
    let email = this.formFields.email.value;
    let username = this.formFields.username.value;
    let password = this.formFields.password.value;

    console.log('These are the entered values:');
    console.log(`First Name: ${ firstName }`);
    console.log(`Last Name: ${ lastName }`);
    console.log(`Email: ${ email }`);
    console.log(`Username: ${ username }`);
    console.log(`Password: ${ password }`);
  }

}
