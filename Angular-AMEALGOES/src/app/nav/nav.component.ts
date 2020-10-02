import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Principal } from '../models/principal';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnDestroy {

  currentUser: Principal;
  currentUserSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.currentUserSub = this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
    });
  }
  ngOnDestroy(): void {
    this.currentUserSub.unsubscribe(); 
  }

  authenticatedUserLinks = [
    {
      linkName: 'Home',
      fragment: '/home'
    },
    {
      linkName: 'Register',
      fragment: '/register'
    },
    {
      linkName: 'New Meal',
      fragment: '/newMeal'
    },
    {
      linkName: 'Join Meal',
      fragment: '/joinMeal'
    },
    {
      linkName: 'User Likes',
      fragment: '/userlikes'
    }
  ]

  unauthenticatedUserLinks = [
    {
      linkName: 'Login',
      fragment: '/'
    },
    {
      linkName: 'Register',
      fragment: '/register'
    }
  ]
}
