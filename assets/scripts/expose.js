// expose.js

window.addEventListener('DOMContentLoaded', init);

function imgAudio(horn) {
  const img = document.querySelector('img[src="assets/images/no-image.png"]');
  const audio = document.getElementsByClassName("hidden");
  if (horn.target.value == "air-horn") {
    img.src = "assets/images/air-horn.svg";
    audio.src = "assets/audio/air-horn.mp3";
  }
  else if (horn.target.value == "car-horn") {
    img.src = "assets/images/car-horn.svg";
    audio.src = "assets/audio/car-horn.mp3";
  }
  else if (horn.target.value == "party-horn") {
    img.src = "assets/images/party-horn.svg";
    audio.src = "assets/audio/party-horn.mp3";
  }
}

function init() {
  // TODO
  const horn = document.getElementsByClassName("horn");
}