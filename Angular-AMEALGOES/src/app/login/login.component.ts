import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  
  }

  get formFields() {
    return this.loginForm.controls;
  }
  
  login() {

    this.submitted=true;
    let username = this.formFields.username.value;
    let password = this.formFields.password.value;

    console.log('These are the entered values:');
    console.log(`Username: ${ username }`);
    console.log(`Password: ${ password }`);
  }
  

}
