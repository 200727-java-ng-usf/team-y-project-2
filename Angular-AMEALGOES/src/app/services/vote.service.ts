import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { env } from 'process';
import { map } from 'rxjs/operators';
import { Vote } from '../models/vote';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private messageService: MessageService) { 
  }

  voteCount: number = 0;





  sendVote(vote: Vote) {

    console.log('in sendVote() service')

    this.messageService.sendMessage(vote);

    
  }

}
