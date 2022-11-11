'use strict';
console.log('type.js loaded');

// DOM objects
const currentWord = document.getElementById('currentWord');
const nextWord = document.getElementById('nextWord');
const hintDiv = document.getElementById('hintDiv');
const currentLocation = document.getElementById('locationInfo');
const lvlInfo = document.getElementById('lvlInfo');
const typeSpeedInfo = document.getElementById('typeSpeedInfo');
const ingameTimeInfo = document.getElementById('ingameTimeInfo');
const userInput = document.getElementById('userInput');

// game lvls
const lvls = [
  ['Tutorial', 'witaj', 'w', 'poziomie', 'testowym', '/end'],
  ['Poziom 2', '/end'],
  ['Poziom 3', '/end'],
  ['Poziom 4', '/end'],
];

//TODO save user progress
const playerInfo = {
  currLvl: lvls[0],
  // completeLvl: [],
  // timeSpend: 0,
  // charTyped: 0,
};

// Starting game upon typing "TYPE_"
const startGame = function () {
  // no need to click on input
  userInput.focus();
  if (userInput.value === 'Type_') initGame();
  if (userInput.value.length > 'Type_'.length) clearInput();
};
// starting game function
const initGame = () => {
  // remove starting game condition listener
  userInput.removeEventListener('keyup', startGame);

  clearInput();
  updateHint('Dobrze! Gra rozpoczęta!');
  updateLocation('[W grze]');
  console.log('Game started');

  gameCycle(playerInfo);
};

// Event listners
//onload to prevent getting error in quokka.js
window.onload = () => userInput.addEventListener('keyup', startGame);

// Functions

// === GAMEPLAY FUNCTION ===
const gameCycle = function (playerArr) {
  let stageIndex = 0;

  userInput.addEventListener('keyup', function (e) {
    const currLvl = playerArr['currLvl']; //lvls[0]
    let currStageWord = currLvl[stageIndex];

    //display current word
    updatePlaceholder(currStageWord);
    console.log('#', stageIndex > currLvl.length);

    console.log(currStageWord, userInput.value, stageIndex, currLvl.length);
    if (userInput.value == currStageWord) {
      // next lvl if current word is last
      if (stageIndex + 1 === currLvl.length) {
        alert('Next lvl');
        stageIndex = -1;
      }

      //następne słowo
      stageIndex++;
      clearInput();
      updatePlaceholder(currLvl[stageIndex]);
    }
    // console.log(currStageWord, stageIndex);
  });
};

// clears userInput
const clearInput = () => (userInput.value = '');

//  updates yellow bar hint content
const updateHint = function (str) {
  hintDiv.textContent = str;
};

const updatePlaceholder = str => (userInput.placeholder = str);

// updates location in green info bar
const updateLocation = function (str) {
  currentLocation.textContent = str;
};
