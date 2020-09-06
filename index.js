//CONSTS

const btnStart = document.querySelector("button.btn-style");
const animationSelect = document.getElementById("main");
const storyIntroduction = document.getElementById("introduction");
const btnGame = document.querySelector("button.startGame");
const quizzSection = document.getElementById("quizz-section");

// FUNCTIONS

function startGame() {
  animationSelect.classList.toggle("scale-out-center");
  delayedStory();
}

function startQuizz() {
    quizzSection.style.display ="block";
    storyIntroduction.style.display = "none";
  }

function delayedStory() {
  setTimeout(() => {
    animationSelect.style.display = "none";
    storyIntroduction.style.display = "block";
  },); // set time out between ",)"
}

// LISTENERS
btnStart.addEventListener("click", startGame);
btnGame.addEventListener("click", startQuizz);
//Pas de parenthèses après la fonction autrement elel se lance directement.
// btnStart.addEventListener("click", () => {
// animationSelect.classList.toggle("scale-out-center");
// });
