
//collect all of the variables to be used between the ****'s
//**************************//
var body = document.body;
var headerInfo = document.querySelector(".headerInfo")
var timerCount;
var timerInfo = document.querySelector(".timer-count");
var score = document.querySelector(".score");
var startButton = document.querySelector("#start-button");
var directions = document.querySelector(".directions");
var directionsEl = document.createElement("h2");
var header = document.querySelector(".header");
var section = document.querySelector(".section");
var container = document.querySelector(".container")
var quizContent = document.querySelector(".quiz-content");
var question = document.querySelector("#question");
var answerList = document.querySelector("#answerList");
var result = document.querySelector("#result");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var li = document.querySelectorAll("li");

//**************************//

//assign content to html
headerInfo.textContent = "Coding Quiz Challenge";
directions.innerHTML = "We Love Quizzes!  Do your best to answer as many as you can before the timer runs out! Wrong answers take 20 seconds off the timer.";

//style the content below
timerInfo.setAttribute("style", "font-size: 18px; font-weight: bold; background-color: lightgray; border:black solid 2px; color:darkred");
score.setAttribute("style", "font-size: 18px; font-weight: bold");
header.setAttribute("style", "width:100%");
headerInfo.setAttribute("style", "color:green; margin:auto; text-align:center; background-color:lightgray; border:black solid; width:100%");
directions.setAttribute("style", "font-size:13px; padding:5px; text-align:center");
container.setAttribute("style", "text-align:center");
for (var i = 0; i < li.length; i++) {
    li[i].setAttribute("style", "display: flex; color: blue; font-weight: bolder; justify-content:right; border: black solid 1px; width:auto; background-color:lightgray; padding:5px");
  }





//set up timer process
timerCount = 60;
function startTimer() {
    // Sets timer
    var timer = setInterval(function () {
        timerCount--;
        timerInfo.textContent = "Time remaining: " + timerCount;

        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
            timerInfo.textContent = "Time's Up!";
            // UserInfo();
        }
    }, 1000);
}

//set up questions and answers
//answers should list out as a multiple choice by setting them up as objects and A1, A2, A3, A4 be the propery and the answer being the value of those properties.


function presentQuestion1() {
    var q1 = "Is JavaScript a case-sensitive language?"
    var q1Answers = {
        //Q1A1 is correct
        Q1A1: "Yes",
        Q1A2: "No",
        Q1A3: "Not always",
        Q1A4: "Only when running HTML"
    }
    question.textContent = q1;
    choice1.textContent = q1Answers.Q1A1;
    choice2.textContent = q1Answers.Q1A2;
    choice3.textContent = q1Answers.Q1A3;
    choice4.textContent = q1Answers.Q1A4;
    //add a variable called "CorrectAnswer" that declares the correct answer
    //add event listener "click" that marks the user's entry
    // write if statement to check if the user entry matches "CorrectAnswer1" to execute the follow:  IF TRUE: increase score by 1, advance to presentQuestion2().  IF FALSE: no action on the score, reduce the time by 20 seconds, move on to presentQuestion2().
}

function presentQuestion2() {
    var q2 = "Which of the following functions returns a string value to uppoercase?"
    var q2Answers = {
        //Q2A2 is correct
        Q2A1: "toLocateUpperCase()",
        Q2A2: "toUpperCase()",
        Q2A3: "toString()",
        Q2A4: "substring()"
    }
    question.textContent = q2;
    choice1.textContent = q2Answers.Q2A1;
    choice2.textContent = q2Answers.Q2A2;
    choice3.textContent = q2Answers.Q2A3;
    choice4.textContent = q2Answers.Q2A4;
    //add a variable called "CorrectAnswer2" that declares the correct answer
    //add event listener "click" that marks the user's entry
    // write if statement to check if the user entry matches "CorrectAnswer2" to execute the follow:  IF TRUE: increase score by 1, advance to presentQuestion3().  IF FALSE: no action on the score, reduce the time by 20 seconds, move on to presentQuestion3().
}

function presentQuestion3() {
    var q3 = "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?"
    var q3Answers = {
        //Q3A4 is correct
        Q3A1: "sup()",
        Q3A2: "small()",
        Q3A3: "strike()",
        Q3A4: "sub()"
    }
    question.textContent = q3;
    choice1.textContent = q3Answers.Q3A1;
    choice2.textContent = q3Answers.Q3A2;
    choice3.textContent = q3Answers.Q3A3;
    choice4.textContent = q3Answers.Q3A4;
    //add a variable called "CorrectAnswer3" that declares the correct answer
    //add event listener "click" that marks the user's entry
    // write if statement to check if the user entry matches "CorrectAnswer3" to execute the follow:  IF TRUE: increase score by 1, advance to presentQuestion4().  IF FALSE: no action on the score, reduce the time by 20 seconds, move on to presentQuestion4().
}

function presentQuestion4(){
    var q4 = "Which of the following function of Array object reverses the order of the elements of an array?"
    var q4Answers = {
        //Q3A1 is corect
        Q4A1: "reverse()",
        Q4A2: "push()",
        Q4A3: "reduce()",
        Q4A4: "reduceRight()"
    }
    question.textContent = q4;
    choice1.textContent = q4Answers.Q4A1;
    choice2.textContent = q4Answers.Q4A2;
    choice3.textContent = q4Answers.Q4A3;
    choice4.textContent = q4Answers.Q4A4;
    //add a variable called "CorrectAnswer4" that declares the correct answer
    //add event listener "click" that marks the user's entry
    // write if statement to check if the user entry matches "CorrectAnswer4" to execute the follow:  IF TRUE: increase score by 1, pushes user to fucntion UserInfo().  IF FALSE: no action on the score, pushes user to function UserInfo().
}

    

//question should show up as a text above the answers








//(Maybe)create for loop to go through the index of the propery inex of the Q#answers string.

//if the user's input matches the correct answer, move on to the next quesion and add 5 points

//if the user's input does not equal the correct answer, substrct 20 seconds from the clock and move onto the next question
//take the timer count and create a new variable that takes the times's current count, minus 20.  Then use that new varible to and create a new startTimer function (so that it will reinitialize the countdown from it's current spot)




//function to accept the user's initials and score to save in the local storage

// function UserInfo() {

// }

//
startButton.addEventListener("click", startTimer);
startButton.addEventListener("click", presentQuestion1);