import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateMealComponent } from './create-meal/create-meal.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { VoteMealComponent } from './vote-meal/vote-meal.component';
=======
import { JoinMealComponent } from './join-meal/join-meal.component';
>>>>>>> 50f00c6060409c28a893c17445ab80e969758e10
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
<<<<<<< HEAD
  { path: 'newMeal', component: CreateMealComponent },
  { path: 'joinMeal', component: RegisterComponent },
=======
  { path: 'joinmeal', component: JoinMealComponent },
>>>>>>> 50f00c6060409c28a893c17445ab80e969758e10
  { path: '', component: LoginComponent },
  { path: 'voteMeal', component: VoteMealComponent},
  { path: 'newMeal', component: CreateMealComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
