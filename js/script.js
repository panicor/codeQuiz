var time = questions.length * 15;
currentQuestionIndex = 0; 

var startButton = document.querySelector("#start-button");
var questionsEl = document.querySelector("#questions-section");
var timerEl = document.querySelector("#time");
var qChoices = document.querySelector("#choices-list");
var startScreen =  document.querySelector("#start-section");
var titleEl = document.querySelector("bigbox");

function startQuiz (){
   // startScreen.setAttribute("class", "hidden");
   // questionsEl.removeAttribute("class");
    startTimer();
}

function getCurrentQuestion(){
 var currentQuestion = questions[currentQuestionIndex];
 titleEl.textContent = currentQuestion.title;
 questionChoices.textContent ="";

 for (let i = 0; i <currentQuestion.choices.length; i++){
     let choiceNode = document.createElement("button");
     choiceNode.setAttribute("class", "choice");
     choiceNode.setAttribute("value", currentQuestionChoice[i]);
     choiceNode.textContent = i + 1 + ". " + currentQuestion.choice[i];
     qChoices.appendChild(choiceNode);
 }
}

function startTimer() {
    // Sets timer
      var timer = setInterval(function() {
      time--;
      timerEl.textContent = time;

     if (time == 0) {
      clearInterval(timer);
     // endQuiz();
      }
    //     // Tests if win condition is met
    //     if (isWin && timerCount > 0) {
    //       // Clears interval and stops timer
    //       clearInterval(timer);
    //       winGame();
    //     }
    //   }
  
    //   // Tests if time has run out
    //   if (timerCount === 0) {
    //     // Clears interval
    //     clearInterval(timer);
    //     loseGame();
     // }
    }, 1000);
  }


startButton.addEventListener("click", startQuiz);