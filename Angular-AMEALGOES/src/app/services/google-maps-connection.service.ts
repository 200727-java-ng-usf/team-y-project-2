import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsConnectionService {



  constructor() { 

  console.log('In GoogleMapsConnectionService');

}

async getRestaurants(city: string) {

  console.log('in getRestaurants()');

  let FileDirectory;


  if (city.toLowerCase().localeCompare(('new york'))==0){
    FileDirectory = 'assets/philadelphia_json.txt';
    console.log('its new york');

  }

  if (city.toLowerCase().localeCompare(('philadelphia'))==0){
      FileDirectory = 'assets/new_york_JSON.txt';
      console.log('its philly');
  }


console.log('this is in fileDirectory '+FileDirectory);


  return fetch(FileDirectory)
  .then(response => response.text())
  .then(text => {


    console.log('this is in text '+text);
    let fullResults = JSON.parse(text);


    var list = [];

    for(let i = 0; i<20; i++){

      let nameInJSON = fullResults.results[i].name;
      let vicinityInJSON = fullResults.results[i].vicinity; 
      let idInJSON = fullResults.results[i].place_id;
      
      let restaurant = {
        name: nameInJSON,
        address:vicinityInJSON,
        placeId:idInJSON
      }

      list[i] = restaurant;

    
    }

    return list;
 
    });



}



}
