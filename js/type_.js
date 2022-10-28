'use strict';
console.log('type.js loaded');

// DOM objects
const userInput = document.getElementById('userInput');
const currentWord = document.getElementById('currentWord');
const nextWord = document.getElementById('nextWord');
const currentLocation = document.getElementById('infoLocation');
const otherInfo = document.getElementById('otherInfo');

userInput.focus();

// Global variables
let gameActive = false;
let stage = 0;
let lvl = 0;

// Levels
const lvltest = ['lvlTest', 's', 'd', 'f'];
const lvlAnia = [
  'Ania',
  'Bania',
  'bania',
  'bonia',
  'cynia',
  'cznia',
  'Dania',
  'dania',
  'dnia',
  'dynia',
  'fonia',
  'gania',
  'Genia',
  'gunia',
  'Hania',
  'Henia',
  'inia',
  'Jonia',
  'kania',
  'Kania',
  'Kenia',
  'konia',
  'kunia',
  'lania',
  'lenia',
  'linia',
  'łania',
  'Mania',
  'mania',
  'minia',
  'Monia',
  'munia',
  'nenia',
  'ognia',
  'omnia',
  'penia',
  'pinia',
  'pnia',
  'Renia',
  'Rynia',
  'rynia',
  'Sonia',
  'sunia',
  'tania',
  'unia',
  'Unia',
  'venia',
  'wania',
  'xenia',
  'Zenia',
  'Zonia',
];

// Functions

function setInput(placeHolder) {
  userInput.value = '';
  userInput.placeholder = placeHolder;
}

function setHints(current, next) {
  currentWord.textContent = current;
  nextWord.textContent = next;
}

function setCurrentLocation(location, lvl, stage) {
  const CurrenLocation = `${location} ${lvl[0]} ${stage}/${lvl.length}`;
  currentLocation.textContent = CurrenLocation;
}

function playGame(lvl) {
  setCurrentLocation('[W grze]', lvl, stage);
  setHints(lvl[stage], lvl[stage + 1]);
  
  if (userInput.value.length > lvl[stage].length) setInput(lvl[stage]);
  // TODO why can't i put here setInput(lvl[stage])?
  if (userInput.value === lvl[stage]) {
    console.log('Good!');
    userInput.value = '';
    stage++;
    console.log(lvl[stage] + '<--------------');
    userInput.placeholder = lvl[stage];

    console.log(`Lvl: ${lvl[0]}\nStage: ${stage}/${lvl.length}`);
  } else if (stage >= lvl.length) {
    // FIXME stop displaying undefined, go to next level
    console.log(lvl.length);
    console.log(stage);
    console.log('Next lvl');
  }
}

// Evvent Listener
userInput.addEventListener('keyup', function (e) {
  // console.log(e.key);
  if (gameActive === false) {
    if (userInput.value.length > 5) setInput('Type_');
    if (userInput.value === 'Type_') {
      gameActive = true;
      userInput.value = '';
    }
  }
  if (gameActive === true) {
    playGame(lvlAnia);
  }
});
