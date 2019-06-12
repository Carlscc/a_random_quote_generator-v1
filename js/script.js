/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator. Aiming for the 'exceeds expectations' mark!
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
    {   quote: 'Simplicity is about subtracting the obvious and adding the meaningful.',
        source: 'John Maeda',
        tag: '#Design'
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
    var quoteIndex = Math.floor(Math.random() * quotes.length); // Generates a random number between 0 and total number of quotes in the array
        var randomQuote = array[quoteIndex]; // Random quote variable with the index set to the random number variable
        return randomQuote; // Returns random quote variable
    }

// Creates a random RGB number
function randomRGB() {
    return Math.floor(Math.random() * 256);
}

function printQuote() {
    var quoteString = '';
    var findQuote = getRandomQuote(quotes);//calls a quote from the getRandomQuote function
    var red = randomRGB();//creates a random RGB red value
    var green = randomRGB();//creates a random RGB green value
    var blue = randomRGB();//creates a random RGB blue value
    var newColor = 'rgb(' + red + ',' + green + ',' + blue + ')';//create a new RGB color
    //concatonates the quote string which will be displayed with quote, source and tag
    quoteString += "<p class='quote'>" + findQuote.quote + "</p>" + "<p class='source'>" + findQuote.source + "<span class='tag'>" + " " + findQuote.tag + "</span>";
    // checks if the citation property is present and if so, adds it to the quote string
    if (findQuote.citation) {
        quoteString += "<span class='citation'>" + " " + findQuote.citation + "</span" + "</p>";
    }      
    //checks if the year property is present and if so, adds it to the quote string
    if (findQuote.year) {
        quoteString += "<span class='year'>" + " " + findQuote.year + "</span>" + "</p>";
    }
    //future improvement: Use array.splice() to remove items from the array, and return the removed items (to avoid same quote appearing until page reloads).

    document.body.style.backgroundColor = newColor; //changes body background with a new color
    document.getElementById('quote-box').innerHTML = quoteString; // displays final HTML string to the page - adds the quote, source, tag and citation & year if applicable
}

//Generate new quote when 'Show another quote' button is clicked.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//call printQuote every 30 seconds
window.setInterval(printQuote, 30000);
