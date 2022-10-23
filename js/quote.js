//lista cytatów
//on load pobierz randomowy cytat
// podmień za text shapeInside: 

let quoteSpan = document.getElementById('quote-span');
quoteSpan.innerHTML = '“...”';

// Listy
let quotesArray = ["Być, albo niebyć o to jest pytanie","A miało być tak pięknie","Jak to leciało?","Ala ma kota"];
let userQuotesArray = [1,2,3,4,5,6,7,8,9,10];

// Zmienne
let randomQ = randomInt(0, quotesArray.length-1);
let rapidApiQuote = "";

// rapidAPI || quotesArray || userQuotesArray
let choice = "rapidAPI";

// Funkcje
function randomInt(size) {
  return Math.floor(Math.random() * size) + 0; 
}

function displayQuote(array, index) {
    const quote = array[index];
    quoteSpan.innerHTML = quote;
}

function addQuote() {
    const quote = prompt("Dodaj swój cytat");
    userQuotesArray.push(quote);
    
    displayQuote(userQuotesArray);
}


//displayQuote(quotesArray, randomInt(quotesArray.length-1));


if (choice === "rapidAPI") {
// RapidAPI https://rapidapi.com/martin.svoboda/api/quotes15/
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7dde11acf2msh24bd800da042a3ep164979jsnf0b97007e104',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(response => quoteSpan.innerHTML = '“'+response.content+'”')
	.catch(err => console.error(err));

} else if (choice === "quotesArray") {
    displayQuote(quotesArray,randomInt(quotesArray.length-1));
} else if (choice === "userQuotesArray") {
    displayQuote(userQuotesArray,randomInt(userQuotesArray.length-1));
}else {console.log('Nieznana wartość zmiennej choice');}

//how to quote api?