

// add a start button 
var startQuizButton = document.querySelector("#start-quiz-button");
var viewHighScores = document.querySelector("#highscores-button");
var timerButton = document.querySelector("#timer");
var next = document.querySelector("#next");
var previous = document.querySelector("#previous");
var result  = document.querySelector("#result");


var timeLeft = 30;

//function that starts a timer when button is clicked 

function timer() {
var timeLeft = 30;

var timeInterval = setInterval(function() {
  if (timeLeft > 1) {
    timerButton.textContent = timeLeft + ' seconds remaining';
    timeLeft--;
  } else if (timeLeft === 1) {
    timerButton.textContent = timeLeft + ' second remaining';
    timeLeft--;
  } else {
    timerButton.textContent = 'times up!';
    clearInterval(timeInterval);
  }
}, 1000);

}

function correctAnswers(){
 
}


//start quiz function

function startQuiz(){

} 
//function with a series of 5 questions are presented when button is clicked 
  //answer correctly move to next question
  //answer wrong time is subtracted from the clock 
  
var questions = [
    {
      question: "Commonly used data types do not include?",
      answers: {
        a: 'strings',
        b: 'booleans',
        c: 'alerts',
        d: 'numbers'
      },
      correctAnswer: 'c'
    },
    {
      question: "The conditon in an if / else statement is enclosed within?",
      answers: {
        a: 'quotes',
        b: 'curly brackets',
        c: 'parenthesis',
        d: 'square bracets'
      },
      correctAnswer: 'c'
    },
    {
      question: "Arrays in javascript can be used to store?",
      answers: {
        a: 'numbers and strings',
        b: 'other arrays',
        c: 'booleans',
        d: 'all of the above'
  
      },
      correctAnswer: 'd'
    },
    {
      question: "String values must be enclosed within ____ when being assigned to varaiables?",
      answers: {
        a: 'commas',
        b: 'curly brackets',
        c: 'quotes',
        d: 'parenthesis'
      },
      correctAnswer: 'c'
    }
  ];

//when all questions are answered or time reaches 0, game is over
 function quizOver(){

 }
//when game is over, intials can be saved with score
