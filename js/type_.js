'use strict';
console.log('type.js loaded');

// DOM objects
const userInput = document.getElementById('userInput');
const currentWord = document.getElementById('currentWord');
const nextWord = document.getElementById('nextWord');
const currentLocation = document.getElementById('locationInfo');
const lvlInfo = document.getElementById('lvlInfo');
const typeSpeedInfo = (document.getElementById('typeSpeedInfo').textContent =
  'CPM: 100)');
const ingameTimeInfo = document.getElementById('ingameTimeInfo');

userInput.focus();

//TODO ADD MUSIC / SFX
// var audio = new Audio('https://www.youtube.com/watch?v=lMmLHchT4Ho&ab_channel=HALIDONMUSIC');
// audio.play();

// Global variables
let gameActive = false;
let inputLength = 0;
let stage = 0;
let lvl = 0;
let currTime = 0;
// other
currentLocation.textContent = '[MENU]';

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
//TODO make one function for all infobar functions
//TODO make in-game timer
//TODO make type-speed count and display:
//TODO save lvl score
//TODO display options to either play same lvl again or go to next one
//TODO make lvl menu
function clearUserInput() {
  userInput.value = '';
}

function setPlaceholder(placeHolder) {
  userInput.placeholder = placeHolder;
  // console.log('Placeholder set to: ', placeHolder);
}

function setHints(current, next) {
  currentWord.textContent = `⇛ ${current} ⇚`;
  nextWord.textContent = next;
}

function setCurrentLocation(location, lvl, stage) {
  const newLocation = `${location} ${lvl[0]} ${stage}/${lvl.length}`;
  currentLocation.textContent = newLocation;
}

function updateInfoBar(location, lvl, stage, time, cpm) {}

//FIXME set timer while game active / display while game cative
const time = setInterval(function () {
  currTime++;
  console.log(Math.round(currTime / 60, 2));
  ingameTimeInfo.textContent = currTime;
}, 1000);

function playGame(lvl) {
  setCurrentLocation('[W grze]', lvl, stage);
  setHints(lvl[stage], lvl[stage + 1]);
  setPlaceholder(lvl[stage]);

  if (inputLength > lvl[stage].length) clearUserInput();
  if (userInput.value === lvl[stage]) {
    stage++;
    console.log('Good!');
    clearUserInput();
    setCurrentLocation('[W grze]', lvl, stage);
    setHints(lvl[stage], lvl[stage + 1]);
    setPlaceholder(lvl[stage]);

    // console.log(`Lvl: ${lvl[0]}\nStage: ${stage}/${lvl.length}`);
  } else if (stage >= lvl.length) {
    console.log(lvl.length);
    console.log(stage);
    console.log('Next lvl');
  }
}

// Evvent Listener
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
    playGame(lvlAnia);
    // setPlaceholder("");
  }
});
