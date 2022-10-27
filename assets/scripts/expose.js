// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function setImgAudio(event) {
  const img = document.querySelector('img[alt="No image selected"]');
  const audio = document.querySelector("audio");
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
  const img = document.querySelector('img[alt="Volume level 2"]');
  const audio = document.querySelector("audio");
  if (event.target.value == 0) {
    img.src = "assets/icons/volume-level-0.svg";
    audio.volume = event.target.value / 100;
  }
  else if (event.target.value >= 1 && event.target.value < 33) {
    img.src = "assets/icons/volume-level-1.svg";
    audio.volume = event.target.value / 100;
  }
  else if (event.target.value >= 33 && event.target.value < 67) {
    img.src = "assets/icons/volume-level-2.svg";
    audio.volume = event.target.value / 100;
  }
  else {
    img.src = "assets/icons/volume-level-3.svg";
    audio.volume = event.target.value / 100;
  }
}

function playAudio() {
  const horn = document.getElementById("horn-select");
  const audio = document.querySelector("audio");
  if (horn.options[horn.selectedIndex].text == "Party Horn") {
    jsConfetti.addConfetti();
  }
  audio.play();
}

function init() {
  // TODO
  const horn = document.getElementById("horn-select");
  const volume = document.getElementById("volume");
  const button = document.querySelector("button");
  horn.addEventListener('change', (event) => {setImgAudio(event)});
  volume.addEventListener('change', (event) => {changeVol(event)});
  button.addEventListener('click', () => {playAudio()});
}