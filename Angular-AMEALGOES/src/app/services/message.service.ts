import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';
declare var SockJS;
declare var Stomp;

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
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
        // if (message.body) {
        //   that.msg.push(message.body);
        // }
        console.log(message.body);
      
      });
    });
  }

  sendMessage(vote: Vote) {
    console.log("breadcrumb");
    let voteJson = JSON.stringify(vote);
    this.stompClient.send('/app/send/vote-message' , {}, voteJson);
  }
}
