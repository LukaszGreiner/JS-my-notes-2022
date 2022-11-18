'use strict';
console.log('type.js loaded');

//Import levels array
import { levels } from './levels.js';
import { closeModal, openModal } from './modal.js';

// DOM objects
const currentWord = document.getElementById('currentWord');
const nextWord = document.getElementById('nextWord');
const hintDiv = document.getElementById('hintDiv');
const currentLocation = document.getElementById('locationInfo');
const lvlNameInfo = document.getElementById('lvlNameInfo');
const typeSpeedInfo = document.getElementById('typeSpeedInfo');
const typeAccuracyInfo = document.getElementById('typeAccuracyInfo');
const ingameTimeInfo = document.getElementById('ingameTimeInfo');
const userInput = document.getElementById('userInput');

const player = {
  lvl: 0,
};

// global variables
let keypresses = 0;
let ingameTime = '';

//onload to prevent getting null
window.onload = () => userInput.addEventListener('keyup', startGame);

const setLvlLocation = location => (lvlNameInfo.textContent = location);

userInput.focus();
setLvlLocation(levels[player.lvl][0]);

const startGame = () => {
  if (userInput.value === 'Type_') initGame();
  if (userInput.value.length >= 'Type_'.length) clearInput();
};

const initGame = () => {
  userInput.removeEventListener('keyup', startGame);
  userInput.focus();

  startTimer();
  clearInput();
  updateHint('Game started!');
  updateLocation('[In game]');
  gameCycle(player);
  keypresses = 0;
  setLvlLocation(levels[player.lvl][0]);
  updateCurrWord(levels[player.lvl][0]);
};

const gameCycle = function (playerObj) {
  let stageIndex = 0;
  // set current lvl based on currLvl value of player ocject
  let lvlIndex = playerObj.lvl;
  let currLvlArr = levels[lvlIndex]; //levels[0]

  userInput.addEventListener('keyup', function (e) {
    let currStageWord = currLvlArr[stageIndex];
    updatePlaceholder(currStageWord);

    // input validation
    if (userInput.value == currStageWord) {
      // next level if current word is last item in array
      if (stageIndex + 1 === currLvlArr.length) {
        lvlIndex++;
        stageIndex = -1;
        openModal('Level complete!', `Your time: ${ingameTime}`);
        resetTimer();
        setLvlLocation(levels[lvlIndex][0]);
        // update lvl array
        levels[lvlIndex]
          ? (currLvlArr = levels[lvlIndex])
          : openModal('YOU WON!', 'No more levels left 😎');
        console.log('lvlIndex: ', lvlIndex, 'CurrentArr: ', currLvlArr);
      }

      //next word
      stageIndex++;
      clearInput();
      updatePlaceholder(currLvlArr[stageIndex]);
      updateCurrWord(currLvlArr[stageIndex]);
    }
    if (userInput.value.length >= currStageWord.length) clearInput();
  });
};

const clearInput = () => (userInput.value = '');

const updateHint = str => (hintDiv.textContent = str);

const updatePlaceholder = str => (userInput.placeholder = str);

const updateLocation = str => (currentLocation.textContent = str);

const updateCurrWord = str => (currentWord.textContent = str);

// INFOBAR COMPONENTS

// TIMER
let totalSecs = 0;
let sec = 0;
let min = 0;
const startTimer = () => {
  setInterval(function () {
    if (sec === 60) {
      sec = 0;
      min++;
    }
    sec++;
    totalSecs++;
    ingameTime = `${min}:${sec.toString().padStart(2, '0')}`;
    ingameTimeInfo.textContent = ingameTime;
  }, 1000);
};
const resetTimer = () => {
  sec = 0;
  min = 0;
};
