'use: strict'
console.log('timewatch.js loaded');

const currTimeSpan = document.getElementById('current-time-span');

const timer = setInterval(displayTime, 500);
function displayTime() {
  const today = new Date();
  const currTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  currTimeSpan.innerHTML = `🕐 ${currTime}`;
  document.title = `🕐 ${currTime}`;
}
