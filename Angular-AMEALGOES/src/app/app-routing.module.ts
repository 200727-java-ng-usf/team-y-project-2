import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateMealComponent } from './create-meal/create-meal.component';
import { HomeComponent } from './home/home.component';
import { VoteMealComponent } from './vote-meal/vote-meal.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'newMeal', component: CreateMealComponent },
  { path: 'joinMeal', component: RegisterComponent },
  { path: '', component: LoginComponent },
  { path: 'voteMeal', component: VoteMealComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
