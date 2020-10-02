import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Vote } from '../models/vote';
import { votestatus } from '../models/votestatus';
declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private router: Router) {
    this.initializeWebSocketConnection();
  }

  public stompClient;
  public msg = [];

  initializeWebSocketConnection() {

    const serverUrl = 'http://localhost:8080/amealgos/vote-socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;

    this.stompClient.connect({}, function(frame) {
      console.log("connection made!!!")
      that.stompClient.subscribe('/vote-message', (message) => {
        let voteStatus: votestatus = message.body;
      if (voteStatus.mealVotingFinished == 1) {
        this.router.navigate(['/results']);
      }
      });
    });
  }

  sendMessage(vote: Vote) {
    console.log("breadcrumb");
    let voteJson = JSON.stringify(vote);
    this.stompClient.send('/app/send/vote-message' , {}, voteJson);
  }

}
