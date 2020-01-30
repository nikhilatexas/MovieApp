const request = require("request");
const argv = require("yargs").argv;
let apiKey = "1b2b9988";
let movieName = argv.s || "Home";
let url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;

request(url, function(err, response, body) {
  if (err) {
    console.log("error:", error);
  } else {
    let movie = JSON.parse(body);
    let title = movie.Search[0].Title;
    let year = movie.Search[0].Year;
    console.log(`${title} was released in ${year}.`);
  }
});
