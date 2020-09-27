import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { readFile } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsConnectionService {



  constructor() { 

  console.log('In GoogleMapsConnectionService');

}

async getRestaurants(city: string) {

  console.log('in getRestaurants()');

  let a = 0;
  let FileDirectory;


  

  if (city.toLowerCase().localeCompare(('new york'))==0){
    FileDirectory = 'assets/philadelphia_json.txt';
    console.log('its new york');

  }

  if (city.toLowerCase().localeCompare(('philadelphia'))==0){
      FileDirectory = 'assets/new_york_JSON.txt';
      console.log('its philly');
  }

  //let fr = new FileReader(); 
  //let AllText = fr.readAsText(FileDirectory);

//  console.log("fileDirectoryTest " + AllText);


console.log('this is in fileDirectory '+FileDirectory);


  return fetch(FileDirectory)
  .then(response => response.text())
  .then(text => {


    console.log('this is in text '+text);
    let fullResults = JSON.parse(text);

    //console.log(fullResults.results[0]);

    var list = [];

    for(let i = 0; i<20; i++){

      //console.log(fullResults.results[i].name);
      let nameInJSON = fullResults.results[i].name;
      //console.log(fullResults.results[i].vicinity);
      let vicinityInJSON = fullResults.results[i].vicinity; 
      //console.log(fullResults.results[i].place_id);
      let idInJSON = fullResults.results[i].place_id;
      
      let restaurant = {
        name: nameInJSON,
        address:vicinityInJSON,
        placeId:idInJSON
      }

      list[i] = restaurant;

      console.log('error here? ');
    }

    for(let k = 0; k < 19; k++){
      console.log('list info:' +list[k].name);
    }
    return list;
 
    
    //}).catch(error => {
      //console.log('there was an error');
    });





  //console.log("this is a = " + a);
  //console.log('is this printing??');
//  console.log("TextInTxt2 " + textInTxt);



  //fetch('assets/philadelphia_json.txt')
  //.then(response => response.text())
  //.then(text => console.log(text)); 



}



}
