import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CreateMealComponent } from './create-meal/create-meal.component';
<<<<<<< HEAD
import { JoinMealComponent } from './join-meal/join-meal.component';
=======
import { ResultsComponent } from './results/results.component';
>>>>>>> 76f35540fe60aeaad01122f3ccf54d732074c47a


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    CreateMealComponent,
<<<<<<< HEAD
    JoinMealComponent
=======
    ResultsComponent
>>>>>>> 76f35540fe60aeaad01122f3ccf54d732074c47a
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
