import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private registerService: RegisterService, private router: Router) { 

  }

  ngOnInit(): void {

    this.registrationForm = this.formBuilder.group({      
      username: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      email: [null, Validators.required]
    });

  }

  get formFields() {
    return this.registrationForm.controls;
  }

  register() {

    this.submitted=true;

    if (this.registrationForm.invalid) return;

    this.registerService.register(this.formFields.username.value, this.formFields.password.value, this.formFields.email.value)
    
                    .subscribe(

                      // user successfully logged in, execute the function below
                      () => {
                        this.router.navigate(['/login']);
                      },

                      // if an error occurs, execute the function below; comment out this
                      // section if you'd like to see the observable complete
                      err => {
                        console.log(err);
                        this.submitted = false;
                      }
                    );
  }
}
