import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateMealComponent } from './create-meal/create-meal.component';
import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createmeal', component: RegisterComponent },
  { path: 'joinmeal', component: RegisterComponent },
  { path: '', component: LoginComponent },
<<<<<<< HEAD
  { path: 'newMeal', component: CreateMealComponent },
  { path: 'results', component: ResultsComponent }
=======
  { path: 'login', component: LoginComponent },
  { path: 'newMeal', component: CreateMealComponent}

>>>>>>> e8017c0767d2e81de2bfb5e63e85c3cedb7a8a97
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
