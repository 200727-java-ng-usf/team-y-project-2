import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{

  constructor() {
  }

  authenticatedUserLinks = [
    {
      linkName: 'Home',
      fragment: '/home'
    },
    {
      linkName: 'New Meal',
      fragment: '/newMeal'
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
    },
    {
      linkName: 'Home',
      fragment: '/home'
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
      linkName: 'Results',
      fragment: '/results'
    }
  ]
}
