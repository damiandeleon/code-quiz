
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

//**************************//

//assign content to html
headerInfo.textContent = "Coding Quiz Challenge";
directions.innerHTML = "We Love Quizzes!  Do your best to answer as many as you can before the timer runs out! Wrong answers take 20 seconds off the timer.";

//style the content below
timerInfo.setAttribute("style", "font-size: 18px; font-weight: bold; background-color: lightgray; border:black solid 2px; color:darkred");
score.setAttribute("style", "font-size: 18px; font-weight: bold");
header.setAttribute("style", "width:100%");
headerInfo.setAttribute("style", "color:green; margin:auto; text-align:center; background-color:lightgray; border:black solid; width:100%");
directions.setAttribute("style", "font-size:13px; margin:auto:");
container.setAttribute("style", "text-align:center");





//set up timer process
timerCount = 60;
function startTimer() {
    // Sets timer
    var timer = setInterval(function () {
        timerCount--;
        timerInfo.textContent = "Time remaining: " + timerCount;
        // if (timerCount >= 0) {
            // Tests if win condition is met
            
                // Clears interval and stops timer
                // clearInterval(timer);
                // return
            
        // }
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
var q1 = "Is JavaScript a case-sensitive language?"
var q1Answers = {
    //Q1A1 is correct
    Q1A1: "Yes",
    Q1A2: "No",
    Q1A3: "Not always",
    Q1A4: "Only when running HTML"
}

var q2 = "Which of the following functions returns a string value to uppoercase?"
var q2Answers = {
    //Q2A2 is correct
    Q1A1: "toLocateUpperCase()",
    Q2A2: "toUpperCase()",
    Q2A3: "toString()",
    Q2A4: "substring()"
}

var q3 = "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?"
var q3Answers = {
    //Q3A4 is correct
    Q3A1: sup(),
    Q3A2: small(),
    Q3A3: strike(),
    Q3A4: sub()
}

var q4 = "Which of the following function of Array object reverses the order of the elements of an array?"
var q4Answers = {
    //Q3A1 is corect
    Q3A1: reverse(),
    Q3A2: push(),
    Q3A3: reduce(),
    Q3A4: reduceRight()
}

//question should show up as a text above the answers

//answers should list out as a multiple choice by setting them up as objects and A1, A2, A3, A4 be the propery and the answer being the value of those properties.

//if the user's input equals the the correct answer, move on to the next quesion and add 5 points

//if the user's input does not equal the correct answer, substrct 20 seconds from the clock and move onto the next question
    //take the timer count and create a new variable that takes the times's current count, minus 20.  Then use that new varible to and create a new startTimer function (so that it will reinitialize the countdown from it's current spot)




//function to accept the user's initials and score to save in the local storage

function UserInfo() {

}

//
startButton.addEventListener("click", startTimer);