import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isAssertionExpression } from 'typescript';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsConnectionService {



  constructor(private http: HttpClient) { 

  console.log('In GoogleMapsConnectionService');

}

  // async getRestaurants(city: string) {

  //   console.log('in getRestaurants()');

  //   let FileDirectory;


  //   if (city.toLowerCase().localeCompare(('new york'))==0){
  //     FileDirectory = 'assets/philadelphia_json.txt';
  //     console.log('its new york');

  //   }

  //   if (city.toLowerCase().localeCompare(('philadelphia'))==0){
  //       FileDirectory = 'assets/new_york_JSON.txt';
  //       console.log('its philly');
  //   }


  // console.log('this is in fileDirectory '+FileDirectory);




  //   return fetch(FileDirectory)
  //   .then(response => response.text())
  //   .then(text => {


  //     console.log('this is in text '+text);
  //     let fullResults = JSON.parse(text);


  //     var list = [];

  //     for(let i = 0; i<20; i++){

  //       let nameInJSON = fullResults.results[i].name;
  //       let vicinityInJSON = fullResults.results[i].vicinity; 
  //       let idInJSON = fullResults.results[i].place_id;
        
  //       let restaurant = {
  //         name: nameInJSON,
  //         address:vicinityInJSON,
  //         place:idInJSON
  //       }

  //       list[i] = restaurant;

      
  //     }

  //     return list;
  
  //     });



  // }

  async getRestaurants(city: string) {

    console.log('in getRestaurants()');

    let coordinates;

    let FileDirectory;

    let lowerCaseCity = city.toLowerCase();

    switch(lowerCaseCity) {
      case 'new york':
        coordinates='39.952584,-75.165221';
        console.log('its ny'); 
        break;
      case 'philadelphia':
        coordinates = '39.952584,-75.165221';
        console.log('its philly');
        break;
      case 'orlando':
        coordinates = '28.538336,-81.379236';
        console.log('its orlando');
        break;
      case 'san francisco':
        coordinates = '37.77493,-122.419415';
        console.log('its san fran');
        break;
      case 'savannah':
        coordinates = '32.080899,-81.091203';
        console.log('its savannah');
        break;
      case 'austin':
        coordinates = '30.267153,-97.743061';
        console.log('its austin');
        break;
      case 'columbia':
        coordinates = '39.203714,-76.861046';
        console.log('its columbia');
        break;
      case 'chicago':
        coordinates = '41.878114,-87.629798';
        console.log('its chicago');
        break;

      default:
        
    }

    console.log(`aaa${coordinates}`);
    return await fetch (`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates}&radius=10000&type=restaurant&key=AIzaSyBFU0cyiQthDyRZ4D426NyHWQpkxiESD_4`
    ).then(response => response.text())
    .then(text =>  {
      console.log('this is in text '+ text);
      let fullResults = JSON.parse(text);


      var list = [];

      for(let i = 0; i<20; i++){

        let nameInJSON = fullResults.results[i].name;
        let vicinityInJSON = fullResults.results[i].vicinity; 
        let idInJSON = fullResults.results[i].place_id;
        
        let restaurant = {
          name: nameInJSON,
          address:vicinityInJSON,
          place:idInJSON
        }

        list[i] = restaurant;

      
      }

      return list;
  
      });
    
  

  }
}
