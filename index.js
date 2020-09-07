// CONSTS INTRODUCING THE GAME

const btnStart = document.querySelector("button.btn-style");
const animationSelect = document.getElementById("main");
const storyIntroduction = document.getElementById("introduction");
const btnGame = document.querySelector("button.startGame");

// CONSTS FOR THE QUIZZ SECTION
const quizzSection = document.getElementById("quizz-section");
const quizzContainer = document.getElementById("quizz-style");

const resultContainer = document.getElementById("result-message");
const submitButton = document.getElementById("submit");
const answerButton = document.querySelectorAll("#answers .btn-style");

const img = document.querySelector("#picture");
const hint = document.querySelector("#hint");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

// CONSTS FOR MY QUESTIONS

const myQuestions = [
  {
    img: "Tetris_NES_play.png",
    hint:
      "Easy one to start off. At this point, if you've never heard of that game, don't even try to do this quizz, noob. :'D",
    answers: {
      a: "Matrix",
      b: "Tetris",
      c: "Tinder",
      d: "Tototris",
    },
    correctAnswer: "Tetris",
  },
  {
    img: "Space-invaders.jpg",
    hint:
      "A true classic, this game made by Tomohiro Nishikado gave birth to video games competitions. You better know this one!",
    answers: {
      a: "Galactic crusader",
      b: "Space intruder",
      c: "Evil procrastinator IV",
      d: "Space invaders",
    },
    correctAnswer: "Space Invaders",
  },
];

// FUNCTIONS INTRODUCING THE GAME

function startGame() {
  animationSelect.classList.toggle("scale-out-center");
  delayedStory();
}

function startQuizz() {
  renderQuestion();
  quizzSection.style.display = "block";
  storyIntroduction.style.display = "none";
}

function delayedStory() {
  setTimeout(() => {
    animationSelect.style.display = "none";
    storyIntroduction.style.display = "block";
  }); // set time out between ",)"
}

// FUNCTIONS TO MAKE THE QUIZZ FUNCTIONAL

function btnActive(element) {
  element.classList.toggle("active");
}

function renderQuestion() {
  // Selection des éléments pour la première question

  img.src = myQuestions[0].img;
  hint.innerHTML = myQuestions[0].hint;
  btn1.innerHTML = myQuestions[0].answers.a;
  btn2.innerHTML = myQuestions[0].answers.b;
  btn3.innerHTML = myQuestions[0].answers.c;
  btn4.innerHTML = myQuestions[0].answers.d;

  //Si un bouton est actif(cliqué), sa valeur  est donnée à submit,
  //alors linnerhtml de result met un message positif et on peut passer à la prochaine question
}

function setResults() {
  var score = 0;
  var rightAnswer = myQuestions[0].correctAnswer;
  var chosenAnswer = "";

  answerButton.forEach(function (btn) {
    if (btn.classList.contains("active")) {
      chosenAnswer = btn.innerHTML;
    }
  });
  if (chosenAnswer === rightAnswer) {
    score += 1;
    resultContainer.innerHTML = `Score = ${score}`;
  } else { 
    resultContainer.innerHTML = `Score = ${score}`;
  }
}

function nextQuestion() {
  var count = 0;

  img.src = myQuestions[count + 1].img;
  hint.innerHTML = myQuestions[count + 1].hint;
  btn1.innerHTML = myQuestions[count + 1].answers.a;
  btn2.innerHTML = myQuestions[count + 1].answers.b;
  btn3.innerHTML = myQuestions[count + 1].answers.c;
  btn4.innerHTML = myQuestions[count + 1].answers.d;
}

// LISTENERS STARTING THE GAME

btnStart.addEventListener("click", startGame);
btnGame.addEventListener("click", startQuizz);

//Pas de parenthèses après la fonction autrement elle se lance directement.
// btnStart.addEventListener("click", () => {
// animationSelect.classList.toggle("scale-out-center");
// });

//LISTENERS FOR THE BUTTONS

btn1.addEventListener("click", () => btnActive(btn1));
btn2.addEventListener("click", () => btnActive(btn2));
btn3.addEventListener("click", () => btnActive(btn3));
btn4.addEventListener("click", () => btnActive(btn4));

// LISTENER FOR THE SUBMIT BTN (ON SUBMIT, SHOW RESULTS)
submitButton.addEventListener("click", setResults);
submitButton.addEventListener("click", nextQuestion);
