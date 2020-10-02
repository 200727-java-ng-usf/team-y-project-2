import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateMealComponent } from './create-meal/create-meal.component';
import { HomeComponent } from './home/home.component';
import { VoteMealComponent } from './vote-meal/vote-meal.component';
import { JoinMealComponent } from './join-meal/join-meal.component';
import { ResultsComponent } from './results/results.component';
import { UserLikesComponent } from './user-likes/user-likes.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'createmeal', component: RegisterComponent },
  { path: 'joinmeal', component: RegisterComponent },
  { path: 'voteMeal', component: VoteMealComponent},
  { path: 'newMeal', component: CreateMealComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'userlikes', component: UserLikesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
