// Load npm packages
require("dotenv").config();
var request = require("request");
var apiKey = require("./keys.js");
var inquirer = require("inquirer");

// Capture user input 

// Created a series of questions
inquirer.prompt([

  {
    type: "list",
    name: "command",
    message: "What is your command?",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"]
  },

  {
    type: "input",
    name: "title",
    message: "What title are you searching for?"
  }
]).then(function (inquirerResponse) {

  var command = inquirerResponse.command;
  var title = inquirerResponse.title;

  if (command === "my-tweets") {
    twitter();
  } else if (command === "spotify-this-song") {
    spotify();
  } else if (command === "movie-this") {
    omdb(command, title);
  } else if (command === "do-what-it-says") {
    spotify();
  } else {
    console.log("invalid command");
  }
});


function omdb(command, title) {
     // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
     var key = apiKey.omdbAPI.key;
     console.log(key);

     if (title === undefined) {
         title = "Mr. Nobody";
     }
     
     var queryURL = "https://www.omdbapi.com/?t=" + title + "&plot=full&apikey=" + key;

     // Then run a request to the OMDB API with the movie specified
    request(queryURL, function(error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
  
      // Parse the body of the site and recover just the imdbRating
      var parsedBody = JSON.parse(body);

      console.log(`
      Title: ${parsedBody.Title} 
      Released: ${parsedBody.Released}
      IMDB Rating: ${parsedBody.imdbRating} 
      Rotten Tomatoes Rating: ${parsedBody.Ratings[1].Value}
      Country: ${parsedBody.Country} 
      Language: ${parsedBody.Language} 
      Plot: ${parsedBody.Plot}
      Actors: ${parsedBody.Actors}
      `);
    }
  });

};

function twitter()  {

};

function spotify()  {

};