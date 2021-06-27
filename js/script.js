var time = questions.length * 15;
var currentQuestionIndex = 0; 

var startButton = document.querySelector("#start-button");
var questionsEl = document.querySelector("#questions-section");
var timerEl = document.querySelector("#time");
var qChoices = document.querySelector("#choices-list");
var startScreen =  document.querySelector(".start-section");
var titleEl = document.querySelector("#question-title");
var endSection = document.querySelector("#end-section");
var scoresList = document.querySelector(".hslist");
var initials = document.querySelector("#initials");
var score = document.querySelector("#score");
var msg = document.querySelector(".rightWrong");


function startQuiz (){
    startScreen.setAttribute("class", "hidden");
    questionsEl.setAttribute("class", "visible");
    getCurrentQuestion();
    startTimer();
}

function endQuiz() {
    startScreen.setAttribute("class", "hidden");
    questionsEl.setAttribute("class", "hidden");
    endSection.setAttribute("class", "visible");
    score.textContent = time;
}

function goBack(){
window.history.back();
}

function getCurrentQuestion(){
 var currentQuestion = questions[currentQuestionIndex];
 titleEl.textContent = currentQuestion.question;
 

 for (let i = 0; i < currentQuestion.choices.length; i++){
     let choiceNode = document.createElement("button");
     choiceNode.setAttribute("class", "choice");
     choiceNode.setAttribute("value", currentQuestion[i]);
     choiceNode.textContent = i + 1 + ". " + currentQuestion.choices[i];
     qChoices.appendChild(choiceNode);
 }
}

function eval (){
    if (qChoices == questions.answer){
        msg.textContent = "Correct";
        nextQuestion();
    }
    if (qChoices != questions.answer){
      time = time - 15;
      msg.textContent = "Incorrect";
      nextQuestion();
      }
    }

function nextQuestion(){
    for (let i = 0; i < questions.length; i++){
    var nextQuestion = questions[currentQuestionIndex + i];
    titleEl.textContent = questions[currentQuestionIndex + i].question;
    qChoices.textContent = "";

    for (let i = 0; i < nextQuestion.choices.length; i++){
        let choiceNode1 = document.createElement("button");
        choiceNode1.setAttribute("class", "choice");
        choiceNode1.setAttribute("value", nextQuestion[i]);
        choiceNode1.textContent = i + 1 + ". " + nextQuestion.choices[i];
        qChoices.appendChild(choiceNode1);
    }

   
} 
//msg.textContent = "";
}

function startTimer() {
    // Sets timer
      var timer = setInterval(function() {
      time--;
      timerEl.textContent = time;

     if (time <= 0) {
      time = 0;
      clearInterval(timer);
      endQuiz();
      }
      
     

    }, 1000);
  }
  
function submitInit(){
    localStorage.setItem("initials", initals);
    var initials = localStorage.getItem("initials");
    hsList.appendChild(initials);
}

function clearScores(){
    localStorage.clear();
}


qChoices.addEventListener("click", eval);
startButton.addEventListener("click", startQuiz);

