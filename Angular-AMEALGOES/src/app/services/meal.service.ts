import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment as env } from '../../environments/environment';
import { Principal } from '../models/principal';
import { restaurant } from '../models/restaurant';


@Injectable({
  providedIn: 'root'
})
export class MealService {
  

  private currentMealSubject: BehaviorSubject<number>
  currentMeal$: Observable<number>

  constructor(private http: HttpClient, private router: Router) { 

    this.currentMealSubject = new BehaviorSubject<number>(0);
    this.currentMeal$ = this.currentMealSubject.asObservable();

  }
  

  sendMeal(meal: any) {


    console.log('in sendMeal() service')
    console.log(`${env.API_URL}/meals`);

    return this.http.post(`${env.API_URL}/meals`, meal,{
      headers: {
        'Content-type': 'application/json'
      },
      observe: 'response' // default is body (which refers to the body of the response)
    }).pipe(
      map(resp => {
        let currentMeal = resp.body as number;
        this.currentMealSubject.next(currentMeal);
        this.router.navigate(['/voteMeal']);
        return currentMeal;
      })
    ).toPromise()
  }

  joinMeal(currentUser: Principal, mealCode: number) {


    console.log('in joinMeal()')
    console.log(mealCode);

    return this.http.post(`${env.API_URL}meals/id/${mealCode}`, currentUser, {
      headers: {
        'Content-type': 'application/json'
      },
      observe: 'response'
    }).pipe(
      map(resp => {
        let currentMeal = resp.body as number;
        this.currentMealSubject.next(currentMeal);
        this.router.navigate(['/voteMeal']);
      })
    )}

    get currentMealValue() {
      return this.currentMealSubject.value;
    }
  

  async getResturants() {
    console.log(this.currentMealValue);
    return await this.http.get(`${env.API_URL}meals/id/${this.currentMealValue}`
    ).toPromise();
  }

  votingDone(currentUser: Principal, mealCode: number) {
    return this.http.post(`${env.API_URL}meals/voted/id/${mealCode}`, currentUser, {
      headers: {
        'Content-type': 'application/json'
      },
      observe: 'response'
    }).pipe(
      map(resp => {
        // let currentMeal = resp.body as number; GET FINAL MEAL
        // this.currentMealSubject.next(currentMeal);
        // this.router.navigate(['/voteMeal']); NAV TO FINAL MEAL PAGE
      })
    )}
  }
