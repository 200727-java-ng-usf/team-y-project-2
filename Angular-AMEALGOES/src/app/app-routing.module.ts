import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreateMealComponent } from './create-meal/create-meal.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { JoinMealComponent } from './join-meal/join-meal.component';
=======
import { ResultsComponent } from './results/results.component';
>>>>>>> 76f35540fe60aeaad01122f3ccf54d732074c47a

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'joinMeal', component: JoinMealComponent },
  { path: '', component: LoginComponent },
  { path: 'newMeal', component: CreateMealComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
