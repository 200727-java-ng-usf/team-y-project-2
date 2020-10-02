import { Component, OnInit } from '@angular/core';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-user-likes',
  templateUrl: './user-likes.component.html',
  styleUrls: ['./user-likes.component.css']
})
export class UserLikesComponent implements OnInit {

  restaurants:Array<any>;

  constructor(private likeService:LikeService) {
    this.getLikes();

   }

  ngOnInit(): void {

  }

  async getLikes(){
    this.restaurants = <Array<any>> await this.likeService.getLikes().then(resp2 => {console.log("restaurants in constructor " + resp2);
    return resp2});
    
  }





}
