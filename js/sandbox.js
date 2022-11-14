'use:strict';

const camelCaseInput = document.getElementById('camelCaseInput');
const camelCaseOutput = document.getElementById('camelCaseOutput');
const arrayWordInput = document.getElementById('arrayWordInput');
const arrayWordOutput = document.getElementById('arrayWordOutput');
// MODAL
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// camelCase
camelCaseInput.addEventListener('keyup', function () {
  camelCaseOutput.value = camelCaseInput.value.camelCase();
});

String.prototype.camelCase = function () {
  if (this.length === 0) return '';
  const words = this.trim().split(' ');
  const sentence = [];
  for (let word of words) {
    word = word.replace(word[0], word[0].toUpperCase());
    sentence.push(word);
  }
  return sentence.join('');
};

String.prototype.arrayWord = function () {
  console.log(this.split(' '));
  return `['` + this.split(' ').join(`','`) + `']`;
};

// arrayWord
arrayWordInput.addEventListener('keyup', function () {
  arrayWordOutput.value = arrayWordInput.value.arrayWord();
});

// MODAL
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
document.querySelector('.btn--open-modal').addEventListener('click', openModal);

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
