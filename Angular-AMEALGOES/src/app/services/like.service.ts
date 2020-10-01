import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Principal } from '../models/principal';
import { map } from 'rxjs/operators';

import { environment as env } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

  constructor(private authService: AuthService, private http: HttpClient) { }

  like(liked : boolean) {
    // TODO create post method in backend 
    // let info = { this.authService.currentUserValue, restaurant };
    return this.http.post(`${env.API_URL}/users/likes`, liked, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
  }
}
