import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {
  }

  // 
  register(email: string, username: string, password: string) {

    console.log('in authenticate()');

    let newUser = { email, username, password };

    return this.http.post(`${env.API_URL}/register`, newUser, {
      headers: {
        'Content-type': 'application/json'
      },
      observe: 'response' // default is body (which refers to the body of the response)
    });
  }

}
