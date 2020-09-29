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
<<<<<<< HEAD
      linkName: 'Vote Meal',
      fragment: '/voteMeal'
=======
      linkName: 'Join Meal',
      fragment: '/joinMeal'
>>>>>>> 50f00c6060409c28a893c17445ab80e969758e10
    },
    {
      linkName: 'Results',
      fragment: '/results'
    }
  ]
}
