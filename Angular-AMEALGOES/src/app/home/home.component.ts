import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

  authenticatedUserLinks = [
    {
      linkName: 'Create Meal',
      fragment: '/newMeal'
    },
    {
      linkName: 'Join Meal',
      fragment: '/joinmeal'
    }
  ]

}
