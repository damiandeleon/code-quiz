
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
timerCount = 120;
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
            // UserInfo();
        }
    }, 1000);
}

//set up questions and answers
//question should show up as a text above the answers
//answers should list out as a multiple choice by setting them up as objects and A1, A2, A3, A4 be the propery and the answer being the value of those properties.

//function to accept the user's initials and score to save in the local storage

function UserInfo() {

}

//
startButton.addEventListener("click", startTimer);