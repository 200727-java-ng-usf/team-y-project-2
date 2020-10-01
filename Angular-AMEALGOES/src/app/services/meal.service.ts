import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: HttpClient) { }


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
        console.log("this is in the response body " + resp.body + " this is the response " + resp);
        return resp.body;
      })
    ).toPromise()
  }
}
