import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateMealComponent } from './create-meal/create-meal.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent }, // goes to register page
  { path: 'login', component: LoginComponent }, // for when user registers, they get redirected to login
  { path: '', component: LoginComponent }, // opening page
  { path: 'newMeal', component: CreateMealComponent} // page for creating new 'meal' instance
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
