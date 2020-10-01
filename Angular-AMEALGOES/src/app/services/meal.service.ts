import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }


  sendMeal(restaurantList: any) {

    console.log('in sendMeal() service')

    return this.http.post(`${env.API_URL}/meal`, restaurantList, {
      headers: {
        'Content-type': 'application/json'
      },
      observe: 'response' // default is body (which refers to the body of the response)
    });
  }

  retrieveWinningRestauarant() {
    console.log('in retrieveWinningRestaurant() in meal service')

    return this.http.get(`${env.API_URL}/meal`);
  }
}
