// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
let voices = [];

function inputText(event) {
  const text = document.getElementById('text-to-speak');
  text.value = event.target.value;
}

function loadVoice() {
  const voiceSelect = document.getElementById('voice-select');
  voices = synth.getVoices();
  for (var i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

function speak() {
  const text = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const utterThis = new SpeechSynthesisUtterance(text.value);
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  const img = document.querySelector('img[alt="Smiling face"]');
  synth.speak(utterThis);
  utterThis.addEventListener('start', function () {
    if (synth.speaking == true){
      img.src = "assets/images/smiling-open.png";
    }
  });
  utterThis.addEventListener('end', function () {
    if (synth.speaking == false){
      img.src = "assets/images/smiling.png";
    }
  });
}

function init() {
  // TODO
  const text = document.getElementById('text-to-speak');
  text.addEventListener('input', (event) => {inputText(event)});
  synth.addEventListener('voiceschanged', () => {loadVoice()});
  const button = document.querySelector('button');
  button.addEventListener('click', () => {speak()});
}