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
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';

=======
import { CreateMealComponent } from './create-meal/create-meal.component';
>>>>>>> bcecd534b283a9a48bf0665a5ab3dd688678680d

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    HomeComponent,
    NavComponent
=======
    NavComponent,
    CreateMealComponent
>>>>>>> bcecd534b283a9a48bf0665a5ab3dd688678680d
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
