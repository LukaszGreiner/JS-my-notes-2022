'use strict';
console.log('type.js loaded');

// DOM objects
const userInput = document.getElementById('userInput');
const currentWord = document.getElementById('currentWord');
const nextWord = document.getElementById('nextWord');
const currentLocation = document.getElementById('locationInfo');
const lvlInfo = document.getElementById('lvlInfo');
const typeSpeedInfo = document.getElementById('typeSpeedInfo');
const ingameTimeInfo = document.getElementById('ingameTimeInfo');

userInput.focus();

//TODO ADD MUSIC / SFX
const correctSFX = new Audio(
  'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3'
);

// Global variables
let gameActive = false;
let inputLength = 0;
let stage = 0;
let lvl = 1;
let gameStartTime = 0;
let realStartTime = Date.now();
let keyPressed = 0;

// other
currentLocation.textContent = '[MENU]';

// Levels
const lvls = {
  easy: {
    1: ['a','b','c'],
    2: ['d','e','f'],
  },
  medium: {
    1: ['g',"h",'i'],
    2: ['j','k','l'],
  },
}


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
//TODO make one function for all infobar functions
//TODO make type-speed count and display:
//TODO save lvl score
//TODO display options to either play same lvl again or go to next one
//TODO make lvl menu
//TODO if letter is wrong change its color to orange
function clearUserInput() {
  userInput.value = '';
}

function setPlaceholder(placeHolder) {
  userInput.placeholder = placeHolder;
  // console.log('Placeholder set to: ', placeHolder);
}

function setHints(current, next) {
  currentWord.textContent = `[${current}]`;
  nextWord.textContent = next;
}

function setCurrentLocation(location, lvl, stage) {
  const newLocation = `${location} ${lvl[0]} ${stage}/${lvl.length}`;
  currentLocation.textContent = newLocation;
}

function setTypeSpeed() {
  keyPressed++;
  typeSpeedInfo.textContent = `[${keyPressed}]`;
}

function playGame(lvl) {
  setCurrentLocation('[W grze]', lvl, stage);
  setHints(lvl[stage], lvl[stage + 1]);
  setPlaceholder(lvl[stage]);
  setTypeSpeed();

  // Timer
  //https://stackoverflow.com/questions/63513107/making-a-fictional-game-time-clock
  let timerId = setInterval(function () {
    let gameTime = gameStartTime + (Date.now() - realStartTime);
    let sec = Math.floor(gameTime / 1000) % 60;
    let min = Math.floor(gameTime / 60000) % 60;
    ingameTimeInfo.textContent = `${min}:${sec}`.replace(/\b\d\b/g, '0$&');
  }, 1000);

  if (inputLength > lvl[stage].length) clearUserInput();
  if (userInput.value === lvl[stage]) {
    stage++;
    console.log('Good!');
    correctSFX.play();
    clearUserInput();
    setCurrentLocation('[W grze]', lvl, stage);
    setHints(lvl[stage], lvl[stage + 1]);
    setPlaceholder(lvl[stage]);

    // console.log(`Lvl: ${lvl[0]}\nStage: ${stage}/${lvl.length}`);
  } 
    if (stage >= lvl.length) {
    console.log(lvl.length);
    console.log(stage);
    console.log('Next lvl');
    lvl++;
  }
}

// Event Listener
userInput.addEventListener('keyup', function (e) {
  inputLength = userInput.value.length;

  // console.log(e.key);
  if (gameActive === false) {
    if (inputLength > 5 || (inputLength === 5 && userInput.value !== 'Type_'))
      userInput.value = '';
    if (userInput.value === 'Type_') {
      gameActive = true;
      userInput.value = '';
      userInput.placeHolder = '';
    }
  }
  if (gameActive === true) {
    playGame(lvls.easy[lvl]);
    // setPlaceholder("");
  }
});
