// CONSTS INTRODUCING THE GAME

const btnStart = document.querySelector("button.btn-style");
const animationSelect = document.getElementById("main");
const storyIntroduction = document.getElementById("introduction");
const btnGame = document.querySelector("button.startGame");
var typeWriting = document.getElementById("centered-element");

// TYPEWRITING EFFECT

var i = 0;
var txt = 'Since its boom in the 70s, the video game industry has been continously shaping and playing a major role in defining its own culture. Video games, in a sense, is like art, it can be a way for gaming developers to express their creativity and emotions. And while the industry is growing, people nowadays tend to forget or ignore the old school classics. This little test will be an opportunity to test your video game knowledge.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    typeWriting.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


// CONSTS FOR THE QUIZZ SECTION
const guessTitle = document.getElementById("guess-title");
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

// CONST FOR THE RESULT SECTION
const finalResults = document.getElementById("result-page");
const resultNumber = document.getElementById("result-number");
const resultText = document.getElementById("result-text");
const printResults= document.getElementById("printAnswers");
//

var score = 0;
var index = 0;

let scoreTable = {
scoreContainer: [{chosen:"",correct:""}],
}

// CONST / QUESTIONS

const myQuestions = [
  {
    img: "./Tetris_NES_play.png",
    hint:
      "Easy one to start off. At this point, if you've never heard of that game, don't even try to do this quizz, noob. :'D",
    answers: {
      a: "Matris",
      b: "Tetris",
      c: "Reglis",
      d: "Tototris",
    },
    correctAnswer: "Tetris",
  },
  {
    img: "./Space-invaders.jpg",
    hint:
      "A true classic, this game made by Tomohiro Nishikado gave birth to video games competitions. You better know this one!",
    answers: {
      a: "Galactic crusader",
      b: "Space intruder",
      c: "Evil procrastinator IV",
      d: "Space invaders",
    },
    correctAnswer: "Space invaders",
  },
  {
    img: "./pac-man-nes-002.jpg",
    hint:
      "This video game was a huge hit amongst women. Fun fact, the gameplay and ghosts of this game were inspired by comic book characters. Pretty sure you played it at least one time in your life!",
    answers: {
      a: "Poc-man",
      b: "Pec-citron-man",
      c: "Pac-man",
      d: "Ghost-man",
    },
    correctAnswer: "Pac man",
  },
  // {
  //   img: "./a link to the past.jpg",
  //   hint:
  //     "One of the most popular Nintendo franchise. People often mistake the name of the hero with the name of the game. Dude, don't make that mistake.",
  //   answers: {
  //     a: "The legend of Zelda",
  //     b: "The legend of Foo",
  //     c: "Zelda quest",
  //     d: "The legend of Link",
  //   },
  //   correctAnswer: "The legend of Zelda",
  // },
  // {
  //   img: "./Megaman2-5.png",
  //   hint:
  //     "Good old Capcom, these games difficulty were seriously hard at the time. The hero, a blue boy with a cannon at the end of his arm is still iconic!",
  //   answers: {
  //     a: "Ultraman",
  //     b: "Gigaman",
  //     c: "Megaman",
  //     d: "Bazman",
  //   },
  //   correctAnswer: "Megaman",
  // },
  // {
  //   img: "./Metroid.png",
  //   hint:
  //     "An other popular Nintendo franchise. The hero, a famous space hunter called Samus is always confronted against aliens.",
  //   answers: {
  //     a: "Samus",
  //     b: "Metroid",
  //     c: "Space Metroid",
  //     d: "Galactic hunt",
  //   },
  //   correctAnswer: "Metroid",
  // },
  // {
  //   img: "./Prince_of_Persia_1_-_MS-DOS_-_Mod_(1).png",
  //   hint:
  //     "This game gave some serious nosebleeds. You had to finish the game in a given time, and the whole game was a huge labyrinth. The good old days where you needed to have a paper and pencil to note everything in order to beat the game.",
  //   answers: {
  //     a: "Persian prince",
  //     b: "Prince of Persia",
  //     c: "Sands of time",
  //     d: "Prince of sands",
  //   },
  //   correctAnswer: "Prince of Persia",
  // },
  // {
  //   img: "./Final-Fantasy-VI-Screenshot-1.png",
  //   hint:
  //     "It's getting harder... One of the biggest RPG franchise out there, famous for its mesmerizing universes.",
  //   answers: {
  //     a: "Pokemon",
  //     b: "Dragon Quest",
  //     c: "Final Fantasy",
  //     d: "Fantasy Star",
  //   },
  //   correctAnswer: "Final Fantasy",
  // },
  // {
  //   img: "./Metal_Slug.png",
  //   hint:
  //     "Do you even arcade? This game was a masterpiece to play with your friends. If you wanted to beat one of these games, you should have spent a loooooot of money! Do you miss the games of Neogeo ? I do :'(",
  //   answers: {
  //     a: "Tank Slug",
  //     b: "War Slug",
  //     c: "Warrior Slug",
  //     d: "Metal Slug",
  //   },
  //   correctAnswer: "Metal Slug",
  // },
  // {
  //   img: "/Chrono-trigger.jpg",
  //   hint:
  //     "Some might consider it as one of the best RPG of all time...The drawings of the game were made by Dragon Ball's creator. Ouch.. I told you it was getting harder! ",
  //   answers: {
  //     a: "Chrono Trigger",
  //     b: "Dragon Quest",
  //     c: "Pokemon",
  //     d: "Final Fantasy",
  //   },
  //   correctAnswer: "Chrono Trigger",
  // },
  // {
  //   img: "./KOF.jpg",
  //   hint:
  //     "Back at it with the Neogeo games, a true fighting classic. SNK at its finest.",
  //   answers: {
  //     a: "King of Fighters",
  //     b: "Street Fighter",
  //     c: "King of the Streets",
  //     d: "Streets of rage",
  //   },
  //   correctAnswer: "King of Fighters",
  // },
  // {
  //   img: "./Oddworld.jpg",
  //   hint:
  //     "Playstation 1 was a hit. This game was one of the best this gaming console had the chance to know. Sweet old Abe.",
  //   answers: {
  //     a: "Abe's Quest",
  //     b: "Abe's Escape",
  //     c: "Abe's Adventure",
  //     d: "Oddworld",
  //   },
  //   correctAnswer: "Oddworld",
  // },
  // {
  //   img: "./half-life-crowbar.jpg",
  //   hint:
  //     "A game changer in the FPS industry. Did you know that this game is the reason why Counter Strike exists? That crowbar tho <3",
  //   answers: {
  //     a: "Doom",
  //     b: "Quake",
  //     c: "Half Life",
  //     d: "Quake",
  //   },
  //   correctAnswer: "Half Life",
  // },
  // {
  //   img: "./Gouls.jpg",
  //   hint:
  //     "Rare are those who finished it. By the end of the first level, you would nosebleed like hell. Come on, beat it, I dare you.",
  //   answers: {
  //     a: "Ghosts'N Ghouls",
  //     b: "Ghouls'N Ghosts",
  //     c: "Knights and Ghouls",
  //     d: "Knights and Ghosts",
  //   },
  //   correctAnswer: "Ghouls'N Ghosts",
  // },
  // {
  //   img: "./Another.jpg",
  //   hint:
  //     "Last but not least, time for the final boss. This Super Nintendo game was made by a single french guy... in his garage. A true masterpiece, considered as one of the best action/platform game ever made. By the way, it's one of my favourite game <3",
  //   answers: {
  //     a: "Outter World",
  //     b: "Out of this World",
  //     c: "In Another World",
  //     d: "Another World",
  //   },
  //   correctAnswer: "Another World",
  // },
];

// FUNCTIONS INTRODUCING THE GAME

function startGame() {
  // animationSelect.classList.add("bounce-out-top");
  delayedStory();
}

function startQuizz() {
  // storyIntroduction.classList.add("bounce-out-top")
  renderQuestion();
  delayedQuizz();
}

function delayedQuizz() {
  // setTimeout(() => {
    storyIntroduction.style.display = "none";
    quizzSection.style.display = "block";
    
  // }, 2000) 
}

function delayedStory() {
  typeWriter();
  // setTimeout(() => {
    animationSelect.style.display = "none";
    storyIntroduction.style.display = "block";
  // }, 2000) 
}

// FUNCTIONS TO MAKE THE QUIZZ FUNCTIONAL

function changeTextColor() {
  guessTitle.style.color = generateRandomColor();
}

function generateRandomColor() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

setInterval(changeTextColor, 200);

function btnActive(element) {
  element.classList.toggle("active");
}

function renderQuestion() {
  // Selection des éléments pour la première question
  img.src = myQuestions[index].img;
  hint.innerHTML = myQuestions[index].hint;
  btn1.innerHTML = myQuestions[index].answers.a;
  btn2.innerHTML = myQuestions[index].answers.b;
  btn3.innerHTML = myQuestions[index].answers.c;
  btn4.innerHTML = myQuestions[index].answers.d;
}

//Si un bouton est actif(cliqué), sa valeur  est donnée à submit,

function setResults() {
  var rightAnswer = myQuestions[index].correctAnswer;
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
  index++;

let printChoice = {chosen:chosenAnswer, correct:rightAnswer};
scoreTable.scoreContainer.push(printChoice);

}

//Les élements à transmettre quand on passe d'une question à une autre

finalResults.style.display = "none"; // La partie des résultats hidden dès le début

function nextQuestion() {
  if (index === myQuestions.length) {
    displayResultSection();
  } else {
    img.src = myQuestions[index].img;
    hint.innerHTML = myQuestions[index].hint;
    btn1.innerHTML = myQuestions[index].answers.a;
    btn2.innerHTML = myQuestions[index].answers.b;
    btn3.innerHTML = myQuestions[index].answers.c;
    btn4.innerHTML = myQuestions[index].answers.d;
  }

  let allBtn = document.querySelectorAll(".btn-style");
  allBtn.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.toggle("active");
    }
  });
}

// FUNCTION TO DISPLAY THE FINAL PAGE WITH RESULTS

function displayResultSection() {

  printtheResults();

  quizzSection.style.display = "none";
  finalResults.style.display = "block";
  resultNumber.innerHTML = `SCORE = ${score}`;

  if (score <= 5) {
    resultText.innerHTML =
      "Okay dude...you're definitely not interested in video games :)";
  } else if (score <= 10) {
    resultText.innerHTML = "Nice one! I guess you know some stuff about video games ;)";
  } else { resultText.innerHTML ="Oh...I see you're a man/woman of culture :D"};
}

function printtheResults(){

  for (index = 1 ; index < scoreTable.scoreContainer.length ; index ++) {
    let choices = scoreTable.scoreContainer[index].chosen ;
    let correctChoice = scoreTable.scoreContainer[index].correct ;
    var li = document.createElement("li");
    li.innerHTML = `Your move : ${choices}  | The right move : ${correctChoice}`
    printResults.appendChild(li);
  
  }
}


// LISTENERS STARTING THE GAME
btnStart.addEventListener("click", startGame);
btnGame.addEventListener("click", startQuizz);

//Pas de parenthèses après la fonction autrement elle se lance directement.

//LISTENERS FOR THE BUTTONS

btn1.addEventListener("click", () => btnActive(btn1));
btn2.addEventListener("click", () => btnActive(btn2));
btn3.addEventListener("click", () => btnActive(btn3));
btn4.addEventListener("click", () => btnActive(btn4));

// LISTENER FOR THE SUBMIT BTN (ON SUBMIT, SHOW RESULTS / CHANGE INDEX OF QUESTION OR DISPLAY RESULT SECTION)
submitButton.addEventListener("click", setResults);
submitButton.addEventListener("click", nextQuestion);
// submitButton.addEventListener("click", resultSection);
