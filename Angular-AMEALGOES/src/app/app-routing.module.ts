import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createmeal', component: RegisterComponent },
  { path: 'joinmeal', component: RegisterComponent },
  { path: '', component: LoginComponent }
=======
import { CreateMealComponent } from './create-meal/create-meal.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent }, // goes to register page
  { path: 'login', component: LoginComponent }, // for when user registers, they get redirected to login
  { path: '', component: LoginComponent }, // opening page
  { path: 'newMeal', component: CreateMealComponent} // page for creating new 'meal' instance
>>>>>>> bcecd534b283a9a48bf0665a5ab3dd688678680d
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
