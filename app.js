// variables for the project
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.getElementsByClassName('btn__reset');
const overLay = document.getElementById('overlay');
const missed = 0;

// Phrases array for game
const phrases = [
  'Playing For Keeps',
  'Drawing a Blank',
  'Swinging For the Fences',
  'Back to Square One',
  'A Fool and His Money are Soon Parted'
 ];

// Event Listener to Start Button
startGame[0].addEventListener("click", ()=> {
    overLay.style.display = 'none';
});

const
