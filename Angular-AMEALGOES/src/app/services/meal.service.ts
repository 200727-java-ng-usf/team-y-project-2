import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { map } from 'rxjs/operators';

=======
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
>>>>>>> 50f00c6060409c28a893c17445ab80e969758e10

import { environment as env } from '../../environments/environment';
import { restaurant } from '../models/restaurant';


@Injectable({
  providedIn: 'root'
})
export class MealService {

<<<<<<< HEAD
  constructor(private http: HttpClient, private router: Router) { }
=======
  private currentMealSubject: BehaviorSubject<number>
  currentMeal$: Observable<number>
>>>>>>> 50f00c6060409c28a893c17445ab80e969758e10

  constructor(private http: HttpClient, private router: Router) { 

    this.currentMealSubject = new BehaviorSubject<number>(0);
    this.currentMeal$ = this.currentMealSubject.asObservable();

  }
  

  sendMeal(restaurantList: any) {

    console.log('in sendMeal() service')

    return this.http.post(`${env.API_URL}/meal`, restaurantList, {
      headers: {
        'Content-type': 'application/json'
      },
      observe: 'response' // default is body (which refers to the body of the response)
    }).pipe(
      map(resp => {
        let currentMeal = resp.body as number;
        this.currentMealSubject.next(currentMeal);
        this.router.navigate(['/voteMeal']);
      })
    );
  }

  joinMeal(mealCode: number) {

    console.log('in joinMeal()')
    console.log(mealCode);

    return this.http.post(`${env.API_URL}/meals/id/${mealCode}`, mealCode, {
      headers: {
        'Content-type': 'text/html'
      },
      observe: 'response'
    }).pipe(
      map(resp => {
        let currentMeal = resp.body as number;
        this.currentMealSubject.next(currentMeal);
        this.router.navigate(['/voteMeal']);
      })
    )}

  
  }
<<<<<<< HEAD

  async getResturants() {

    this.http.get(`${env.API_URL}/meal`).subscribe(resp => 
      {this.router.navigate(['/voteMeal']);
      return resp
    });

  }

}
=======
>>>>>>> 50f00c6060409c28a893c17445ab80e969758e10
