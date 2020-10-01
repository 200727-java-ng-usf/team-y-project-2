import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }


  sendRestaurantList(restaurantList: any) {

    console.log('in sendRestaurantList() service')

    return this.http.post(`${env.API_URL}/restaurant`, restaurantList, {
      headers: {
        'Content-type': 'application/json'
      },
      observe: 'response' // default is body (which refers to the body of the response)
    }).pipe(

      
    ).toPromise()
  }
}