import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { env } from 'process';
import { map } from 'rxjs/operators';
import { Vote } from '../models/vote';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { 
  }

  voteCount: number = 0;

  sendVote(vote: Vote) {

    console.log('in sendVote() service')

    return this.http.post('http://localhost:8080/amealgos/vote', vote, {
      headers: {
        'Content-type': 'application/json'
      },
      observe: 'response' // default is body (which refers to the body of the response)
    }).pipe(
      map(resp => {
        this.voteCount++
      })
    );
  }

}
