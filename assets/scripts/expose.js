// expose.js

window.addEventListener('DOMContentLoaded', init);

import JSConfetti from 'js-confetti'

function setImgAudio(event) {
  const img = document.querySelector('img[src="assets/images/no-image.png"]');
  const audio = document.getElementsByClassName("hidden")[0];
  if (event.target.value == "air-horn") {
    img.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  }
  else if (event.target.value == "car-horn") {
    img.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  }
  else if (event.target.value == "party-horn") {
    img.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  }
}

function changeVol(event) {
  const img = document.querySelector('alt="Volume level 2"');
  const audio = document.getElementsByClassName("hidden")[0];
  if (event.target.value == 0) {
    img.src = "assets/icons/volumne-level-0.svg";
    audio.volume = event.target.value;
  }
  else if (event.target.value >= 1 && event.target.value < 33) {
    img.src = "assets/icons/volumne-level-1.svg";
    audio.volume = event.target.value;
  }
  else if (event.target.value >= 33 && event.target.value < 67) {
    img.src = "assets/icons/volumne-level-2.svg";
    audio.volume = event.target.value;
  }
  else {
    img.src = "assets/icons/volumne-level-3.svg";
    audio.volume = event.target.value;
  }
}

function playAudio() {
  const horn = document.getElementsByClassName("horn");
  const audio = document.getElementsByClassName("hidden")[0];
  if (horn.options[horn.selectedIndex].text == "Party Horn") {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
  audio.play();
}

function init() {
  // TODO
  const horn = document.getElementsByClassName("horn");
  const volume = document.getElementsByClassName("volume");
  const button = document.querySelector("button");
  horn.addEventListener('display', (event) => {setImgAudio(event)});
  volume.addEventListener('change volume', (event) => {changeVol(event)});
  button.addEventListener('play audio', () => {playAudio()});
}