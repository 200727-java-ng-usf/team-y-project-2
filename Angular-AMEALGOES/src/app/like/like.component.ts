import { Component, OnInit } from '@angular/core';
import { LikeService } from '../services/like.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor(private likeService: LikeService) { }

  image = "assets/icons8-heart-512.png";
  liked = false;

  ngOnInit(): void {
    // TODO, in holding component, set liked to user preference.
  }

  toggleLike(){
    this.liked = !this.liked;
    if (this.liked) {
      this.image = "assets/icons8-filled-heart-512.png";
    } else {
      this.image = "assets/icons8-heart-512.png";
    }
    // TODO notify server that this user has liked/disliked holding component.
    this.likeService.like(this.liked);
  }
}
