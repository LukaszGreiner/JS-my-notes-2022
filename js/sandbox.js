'use:strict';

document.article.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
// document.querySelector('textarea').value = '12adssdadas';

// turns string into camelCase sentences
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
