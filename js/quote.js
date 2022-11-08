

//TODO Sharing quote on messenger
//TODO update quote by swaping right
//TODO Creating you own quotes database and chosing source of quotes

// DOM elements
const quoteSpan = document.getElementById('quote-span');
const nextQuoteBtn = document.getElementById('nextQuoteBtn');
const saveQuoteBtn = document.getElementById('saveQuoteBtn');
const shareQuoteBtn = document.getElementById('shareQuoteBtn');

// Event listeners
//shareQuoteBtn.addEventListener('click', shareQuote);
//saveQuoteBtn.addEventListener('click', saveQuote);
nextQuoteBtn.addEventListener('click', nextQuote);
// nextQuoteBtn.addEventListener('click', nextQuote);

// next quote upon hitting Enter key
window.addEventListener('keypress', e => {
  if (e.key === 'Enter') nextQuote();
});

function nextQuote() {
  nextQuoteBtn.disabled = true;
  nextQuoteBtn.value = '...';
  displayQuoteApi();
  setTimeout(() => {
    nextQuoteBtn.disabled = false;
    nextQuoteBtn.value = 'Dalej';
  }, 1000);
}

// Listy
const quotesArray = [
  'Być, albo niebyć o to jest pytanie',
  'A miało być tak pięknie',
  'Jak to leciało?',
  'Ala ma kota',
];
const userQuotesArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Global variables
const randomQuote = randomInt(0, quotesArray.length - 1);
const rapidApiQuote = '';

// rapidAPI || quotesArray || userQuotesArray
const choice = 'rapidAPI';

// Head
if (choice === 'rapidAPI') {
  displayQuoteApi();
} else if (choice === 'quotesArray') {
  displayQuote(quotesArray, randomInt(quotesArray.length - 1));
} else if (choice === 'userQuotesArray') {
  displayQuote(userQuotesArray, randomInt(userQuotesArray.length - 1));
} else {
  console.log('Nieznana wartość zmiennej choice');
}

// Funkcje
function randomInt(size) {
  return Math.floor(Math.random() * size) + 0;
}

function displayQuote(array, index) {
  const quote = array[index];
  quoteSpan.textContent = quote;
}

function displayQuoteApi() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '7dde11acf2msh24bd800da042a3ep164979jsnf0b97007e104',
      'X-RapidAPI-Host': 'quotes15.p.rapidapi.com',
    },
  };

  fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
    .then(response => response.json())
    .then(response => (quoteSpan.textContent = '“' + response.content + '”'))
    .catch(err => console.error(err));
}

function addQuote() {
  const quote = prompt('Dodaj swój cytat');
  userQuotesArray.push(quote);

  displayQuote(userQuotesArray);
}

//displayQuote(quotesArray, randomInt(quotesArray.length-1));
