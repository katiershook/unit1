/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
creates an array of quotes to be called later**/

var quotes = [

  {
    quote:"Embrace who you are. Literally. Hug yourself. Accept who you are",
    source: "Ellen",
  },
  {
    quote:"Dogs are the best",
    source:"Literally Everyone",
  },
  {
    quote:"We all accept too easily that life has to be hard and forget to make sure we have the most fun we can",
    source: "Amy Schumer",
    citation:"Girl With the Lower Back Tattoo",
    year: 2016,
   },
   {
    quote:"Your body is not a temple. It’s an amusement park. Enjoy the ride",
    source:"Anthony Bourdain",
  },
  {
    quote:"I think there for I am",
    source: "Rene Descartes",
  }
];


console.log(quotes);

/** Creates and calls the functions by using a math.floor */

function getRandomQuote(){

  let randomNumber = Math.floor(Math.random ()* quotes.length );
  return quotes[randomNumber];

  };

/** Using the print quote function to call the quotes and print them to the page */

function printQuote(){
  let print = getRandomQuote();
  let html = "<div id='quote-box'>";
  html += '<p class ="quote">' + print.quote +'</p>';
  html += '<p class ="source">' + print.source;
  if(print.citation && print.year){
    html += '<span class="citation">' + print.citation + '</span><span class="year">' + print.year + '</span></p>';
  }
  else {
    html += '</p></div>'
  }
  document.getElementById('quote-box').innerHTML = html;
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
