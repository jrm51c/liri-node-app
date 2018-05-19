// Read and set all environment variables
require("dotenv").config();

// Provide acess to API keys
var apiKey = require("./keys.js");

// Allow user to input commands
var command = process.argv[2];
var title = process.argv[3];

if (command === "my-tweets")   {
    twitter();
}   else if (command === "spotify-this-song") {
    spotify();
}   else if (command === "movie-this") {
    omdb();   
}   else if (command === "do-what-it-says")   {
    spotify();
}   else {
    console.log("invalid command");
}


function twitter(apiKey, command, title)  {

};

function omdb() {

};

function spotify()  {

};