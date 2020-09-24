import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

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

    if (this.loginForm.invalid) return;

    this.loading = true;
    
    // this.authService.authenticate(this.formFields.username.value, this.formFields.password.value)
    //                     .subscribe(
    //                       () => {
    //                         this.loading = false;
    //                         console.log('login-successful');
    //                         console.log('Navigating to dashboard...');
    //                         this.router.navigate(['/dashboard']);
    //                       },
    //                       err => {
    //                         console.log(err);
    //                         this.loading = false;
    //                         this.submitted = false;
    //                       }
    //                     );

  }
}
  


