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
  ]
}