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
    this.setUpLike();
  }

  async setUpLike() {
    this.image = "assets/giphy.gif";
    await this.likeService.isLiked().then(
      (like : boolean) => {
        this.liked = like;
        if (this.liked) {
          this.image = "assets/icons8-filled-heart-512.png";
        } else {
          this.image = "assets/icons8-heart-512.png";
        }
      }
    )
  }

  setLiked() {
    this.liked = true;
    this.image = "assets/icons8-filled-heart-512.png";
  }

  async toggleLike(){
    this.image = "assets/giphy.gif";
    await this.likeService.like()
      .then((like : boolean) => {
        this.liked = like;
        if (this.liked) {
          this.image = "assets/icons8-filled-heart-512.png";
        } else {
          this.image = "assets/icons8-heart-512.png";
        }
      }
    );

  }


}
