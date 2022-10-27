'use strict';
console.log('type.js loaded');

let userInput = document.getElementById('userInput');

let gameActive = false;
let stage = 0;
let lvl = 0;

const lvltest = ['s', 'd', 'f'];
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

function playGame(lvl) {
  if (userInput.value.length > lvl[stage].length) setInput(lvl[stage]);
  // TODO why can't i put here setInput(lvl[stage])?
  userInput.placeholder = lvl[stage];
  if (userInput.value === lvl[stage]) {
    console.log('Good!');
    userInput.value = '';
    stage++;
    userInput.placeholder = lvl[stage];
    console.log(`Lvl: ${lvl[0]}\nStage: ${stage}/${lvl.length}`);
  } else if (stage >= lvl.length) {
    // FIXME stop displaying undefined, go to next level
    console.log(lvl.length);
    console.log(stage);
    console.log('Next lvl');
  }
}

function setInput(placeHolder) {
  userInput.value = '';
  userInput.placeholder = placeHolder;
}
