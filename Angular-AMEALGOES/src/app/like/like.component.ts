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
    this.setUpLike();
  }

  async setUpLike() {
    await this.likeService.isLiked().then(
      (liked) => {
        if (liked) this.setLiked();
      }
    )
  }

  setLiked() {
    this.liked = true;
    this.image = "assets/icons8-filled-heart-512.png";
  }

  async toggleLike(){
    // TODO notify server that this user has liked/disliked holding component.
    await this.likeService.like()
      .then((success) => {
        if (success) {
          this.liked = !this.liked;
          if (this.liked) {
            this.image = "assets/icons8-filled-heart-512.png";
          } else {
            this.image = "assets/icons8-heart-512.png";
          }
        }
      }
    );

  }


}
