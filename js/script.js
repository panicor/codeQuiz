var time = questions.length * 15;
var currentQuestionIndex = 0; 
var correctAnswers = [2,1,4,4];

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
var submitButton = document.querySelector("#submit-button");
var tableElInit = document.querySelectorAll(".initSet");
var tableElScore = document.querySelectorAll(".scoreSet");

function startQuiz(event){
    event.preventDefault();
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

function nextQuestion(){
    for (let i = 0; i < questions.length; i++){
    var nextQuestion = questions[currentQuestionIndex + i];
    titleEl.textContent = questions[currentQuestionIndex + i].question;
    qChoices.textContent = "";
        }

    for (let i = 0; i < nextQuestion.choices.length; i++){
        let choiceNode1 = document.createElement("button");
        choiceNode1.setAttribute("class", "choice");
        choiceNode1.setAttribute("value", nextQuestion[i]);
        choiceNode1.textContent = i + 1 + ". " + nextQuestion.choices[i];
        qChoices.appendChild(choiceNode1);
    }
    //msg.textContent = "";
} 

function eval(){
 //if (rightClick == correctAnswers[currentQuestionIndex]){
   if(eventListen == correctAnswers[currentQuestionIndex]){
        msg.textContent = "Correct";
   }
    //if (rightClick != correctAnswers[currentQuestionIndex])
    if (eventListen != correctAnswers[currentQuestionIndex])
    {
      time = time - 15;
      msg.textContent = "Incorrect";
      }  
      getCurrentQuestion();
       //nextQuestion();
    }
    
    
function startTimer() {
    // Sets timer
      var timer = setInterval(function() {
      time--;
      timerEl.textContent = time;

     if (time <= 0) {
      time = 0;
      timerEl.textContent = 0;
      clearInterval(timer);
      endQuiz();
      }
    }, 1000);
  }
  
function submitInit(event){
    event.preventDefault();

    //gets letters they put in
    localStorage.setItem("initials", initials.value);
    localStorage.setItem("score", parseInt(time));
    var newNew2 =  localStorage.getItem("initials").value;
    var newNew1 = localStorage.getItem("score").value;

    location.href= "hs.html";
    
    tableElInit.textContent = newNew2;
    tableElScore.textContent = newNew1;
    
    // appendChild(inits);
    // tableElScore.appendChild(setScore1);
}

function clearScores(){
    localStorage.clear();
}

if(submitButton){
submitButton.addEventListener("click", submitInit);
}

if(startButton){
startButton.addEventListener("click", startQuiz);
}


if(qChoices){
var eventListen = qChoices.addEventListener("click", eval);
}
