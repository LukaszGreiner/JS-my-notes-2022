'use:strict';

const camelCaseInput = document.getElementById('camelCaseInput');
const camelCaseOutput = document.getElementById('camelCaseOutput');

camelCaseInput.addEventListener('keyup', function() {
  console.log(camelCaseInput.value);
  camelCaseOutput.value = camelCaseInput.value.camelCase();
})

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
