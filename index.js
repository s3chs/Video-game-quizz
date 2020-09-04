//CONSTS

const btnStart = document.querySelector("button.btn-style");
const animationSelect = document.getElementById("main");
const storyIntroduction = document.getElementById("introduction");

// FUNCTIONS

function startGame() {
  animationSelect.classList.toggle("scale-out-center");
  delayedStory();
}

function delayedStory() {
  setTimeout(() => {
    animationSelect.style.display = "none";
    storyIntroduction.style.display = "block";
  }, 2 * 1000);
}

// LISTENERS
btnStart.addEventListener("click", startGame); //Pas de parenthèses après la fonction autrement elel se lance directement.
// btnStart.addEventListener("click", () => {
// animationSelect.classList.toggle("scale-out-center");
// });
