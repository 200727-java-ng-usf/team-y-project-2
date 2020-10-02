import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment as env } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  private restaurant_id: string;

  constructor(private authService: AuthService, private http: HttpClient) {
    this.setCurrentRestaurant("qwiory");
   }

  like() {
    let user_id = this.authService.currentUserValue.id;
    let restaurant_place_id = this.restaurant_id;
    let userLike = { user_id, restaurant_place_id };
    console.log(userLike);
    
    return this.http.post(`${env.API_URL}/users/likes`, userLike, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).toPromise();
  }

  isLiked() {
    let userId = this.authService.currentUserValue.id;
    let rest_vote = this.restaurant_id;
    console.log(userId);
    console.log(rest_vote);
    
    
    return this.http.get(`${env.API_URL}/users/${userId}/likes/${rest_vote}`).toPromise();
  }

  setCurrentRestaurant(new_restaurant_id: string) {
    this.restaurant_id = new_restaurant_id;
  }

  getLikes(){
    //let userId = this.authService.currentUserValue.id;
    let userId = 1;
    console.log(userId);
    
    console.log("endpoint " + `${env.API_URL}users/${userId}/likes`);
    return this.http.get(`${env.API_URL}users/id/${userId}/likes`).toPromise();
  }
}
