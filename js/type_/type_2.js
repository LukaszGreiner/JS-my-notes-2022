'use strict';
console.log('type.js loaded');

//Import lvls array
import { lvls } from './lvls.js';
import * as name from './modal.js';

// DOM objects
const currentWord = document.getElementById('currentWord');
const nextWord = document.getElementById('nextWord');
const hintDiv = document.getElementById('hintDiv');
const currentLocation = document.getElementById('locationInfo');
const lvlInfo = document.getElementById('lvlInfo');
const typeSpeedInfo = document.getElementById('typeSpeedInfo');
const ingameTimeInfo = document.getElementById('ingameTimeInfo');
const userInput = document.getElementById('userInput');

//test lvls
/* const lvls = [
    ['Tutorial', 'witaj', 'w', 'poziomie', 'testowym', '/finish'],
    ['Poziom 1', '/end'],
    ['Poziom 2', '/end'],
    ['Poziom 3', '/end'],
  ]; */

//TODO save user progress
const playerInfo = {
  lvl: 0,
};

//onload to prevent getting null
window.onload = () => userInput.addEventListener('keyup', startGame);

//focus cursor
userInput.focus();

// Starting game upon typing "TYPE_"
const startGame = function () {
  // no need to click on input
  userInput.focus();

  if (userInput.value === 'Type_') initGame();
  if (userInput.value.length >= 'Type_'.length) clearInput();
};

// starting game function
const initGame = () => {
  console.log('Init game()');
  // remove starting game condition listener
  userInput.removeEventListener('keyup', startGame);

  clearInput();
  updateHint('Game started!');
  updateLocation('[In game]');

  gameCycle(playerInfo);
};

// === GAMEPLAY FUNCTION ===
const gameCycle = function (playerObj) {
  let stageIndex = 0;
  // set current lvl based on currLvl value of player ocject
  let lvlIndex = playerObj.lvl;
  let currLvlArr = lvls[lvlIndex]; //lvls[0]

  userInput.addEventListener('keyup', function (e) {
    let currStageWord = currLvlArr[stageIndex];

    //display current word
    updatePlaceholder(currStageWord);
    updateCurrWord(currStageWord);

    // check if input is same as current word
    if (userInput.value == currStageWord) {
      // next level if current word is last item in array
      if (stageIndex + 1 === currLvlArr.length) {
        alert('Next lvl');
        lvlIndex++;
        stageIndex = -1;
        // update lvl array
        lvls[lvlIndex]
          ? (currLvlArr = lvls[lvlIndex])
          : alert('YOU WON! No more levels left 😎');
        console.log('lvlIndex: ', lvlIndex, 'CurrentArr: ', currLvlArr);
      }

      //next word
      stageIndex++;
      clearInput();
      updatePlaceholder(currLvlArr[stageIndex]);
    }
    // clear input if player typed different word
    if (userInput.value.length >= currStageWord.length) clearInput();
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

const updateCurrWord = function (str) {
  currentWord.textContent = str;
};
