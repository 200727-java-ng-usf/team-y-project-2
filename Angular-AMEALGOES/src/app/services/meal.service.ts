import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient, private router: Router) { }

  sendMeal(restaurantList: any) {

    console.log('in sendMeal() service')

    return this.http.post(`${env.API_URL}/meal`, restaurantList, {
      headers: {
        'Content-type': 'application/json'
      },
      observe: 'response' // default is body (which refers to the body of the response)
    });
  }

  joinMeal(mealCode: number) {

    console.log('in joinMeal()')


    return this.http.post(`${env.API_URL}/meal`, mealCode, {
      headers: {
        'Content-type': 'text/html'
      }
    })
    // .subscribe(res => {
    //     if(res === '200') this.router.navigate(['/voteMeal']);

  
  }
  
}
