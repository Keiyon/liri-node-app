require("dotenv").config();


var keys = require("./keys.js");

var spotify = require("node-spotify-api");

var request = require("request");

var fs = require("fs");

// var omdb = require("omdb");

var Spotify = new spotify(keys.Spotify);

var user = process.argv[2];
var userQuery = process.argv[3];

if (user == "spotify-this") {
    spotifyThis(userQuery);
}


   else if (user == "movie-this") {
    search(userQuery); 
}

else if (user == "concert-this") {
    concertThis(userQuery);
}



// } else if (user == "do-what-it-says") {
//     







Spotify.search({ type: 'track', query: 'Sinnerman' }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
console.log("Artist: " + data.tracks.items[0].artists[0].name);
  console.log("Song Name: " + data.tracks.items[0].name); 
  console.log("Preview Link: " + data.tracks.items[0].preview_url);
  console.log("Album: " + data.tracks.items[0].album.name);
  });

  function search(movieQ) {

    if (movieQ === '') {

        search = "Mr. Nobody";

    } else {

        search = movieQ;
    }
    var omdb = "http://www.omdbapi.com/?t=" + movieQ + "&y=&plot=short&apikey=trilogy";

request(omdb, function (error, response, body) {
    var result = JSON.parse(body);
  console.log("Title: " + result.Title);
  console.log("Year: " + result.Year);
  console.log("IMBD: " + result.imdbRating);
  console.log("Rotten Tomatoes: " + result.Ratings[1].Value);
  console.log("Country: " + result.Country);
  console.log("Language: " + result.Language);
  console.log("Plot: " + result.Plot);
  console.log("Actors: " + result.Actors);
})
  }; 

  function concertThis(artist) {

    if (artist === '') {

        search = "Beyonce";

    } else {

        search = artist;
    }

var artists = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
request(artists, function (error, response, body) {
 
    var results = JSON.parse(body);
    for (var i = 0; i < results.length; i++) {
    console.log("Venue Name: " + results[i].venue.name);
    console.log("Location: " + results[i].venue.city);
    console.log("MM/DD/YYYY: " + results[i].datetime);
}})

  };