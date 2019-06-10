/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Array of technology related quotes with source and tags plus one quote with year and citation added
var quotes = [{
  quote: 'Motivation comes from working on things we care about.',
  source: 'Sheryl Sandberg',
  tag: '#Motivation'
},
{
  quote: 'If you don’t love it, you’re going to fail.',
  source: 'Steve Jobs',
  citation: 'http://wisdomquotes.com/steve-jobs-quotes/',
  year: '2009',
  tag: '#Motivation'
},
{
  quote: 'We all need people who will give us feedback. That’s how we improve.',
  source: 'Bill Gates',
  tag: '#Progress'
},
{
  quote: 'When you need to innovate, you need collaboration.',
  source: 'Melissa Mayer',
  tag: '#Teamwork'
},
{
  quote: 'The first step is to establish that something is possible; then probability will occur.',
  source: 'Elon Musk',
  tag: '#Motivation'
},
{
  quote: 'If everyone is moving forward together, then success takes care of itself.',
  source: 'Henry Ford',
  tag: '#Teamwork'
},
{
  quote: 'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.',
  source: 'Sheryl Sandberg',
  tag: '#Progress'
},
{
  quote: 'When I look back to my younger self, I would tell myself to be confident first and foremost, to believe in myself, before anyone else because if I believe in myself, then others will too..',
  source: 'Tiffany Pham',
  tag: '#Motivation'
},
{
  quote: 'Do what you love and want to do. Find what you’re good at, what you can sell or provide that is unique to you and go for it.',
  source: 'Dana DonoFree',
  tag: '#Motivation'
},
{
  quote: 'Someone once told me growth and comfort do not coexist. And I think it’s a really good thing to remember.',
  source: 'Ginni Rometty',
  tag: '#Progress'
},
];

function getRandomQuote(array) {
var quoteIndex = Math.floor(Math.random() * quotes.length); // Random number generator
for (var i = 0; i < array.length; i++) { // Loops through the array
  var randomQuote = array[quoteIndex]; // Random quote variable with the index set to the random number variable 
  return randomQuote; // Returns random quote variable 
}
}

// Creates a random RGB color
function randomRGB() {
  return Math.floor(Math.random() * 256);
}


function printQuote() {
  var quoteString = '';
  var findQuote = getRandomQuote(quotes);
  var red = randomRGB();
  var green = randomRGB();
  var blue = randomRGB();
  var newColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  quoteString += "<p class='quote'>" + findQuote.quote + "</p>" + "<p class='source'>" + findQuote.source + "<span class='tag'>" + " " + findQuote.tag + "</span>";
  if (findQuote.citation) {
  quoteString += "<span class='citation'>" + " " + findQuote.citation + "</span" + "</p>";
  } else {
    quoteString += "</p>";
  }
  if (findQuote.year) {
  quoteString += "<span class='year'>" + " " + findQuote.year + "</span>" + "</p>";
  } else {
  quoteString += "</p>";
  }
  
  document.body.style.backgroundColor = newColor; //changes body background with a new color
  document.getElementById('quote-box').innerHTML = quoteString;//add the quote, source, tag and citation & year if applicable
 
 
  printQuote();
}

//Generate new quote when 'Show another quote' button is clicked.
 document.getElementById('loadQuote').addEventListener("click", printQuote, false);
