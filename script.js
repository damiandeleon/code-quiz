
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
var section = document.querySelector("section");

//**************************//

//assign content to html
headerInfo.textContent = "Coding Quiz Challenge";
directions.innerHTML = "We Love Quizzes!  Do your best to answer as many as you can before the timer runs out! Wrong answers take 20 seconds off the timer.";

//style the content below
header.setAttribute("style", "width:100%")
timerInfo.setAttribute("style", "margin:20px; text-align:center ");
headerInfo.setAttribute("style", "color:green; margin:auto; text-align:center; background-color:lightgray; border:black solid; ");
directions.setAttribute("style", "font-size:13px; margin:auto: text-align:center");
score.setAttribute("style", "text-align:center");
startButton.setAttribute("style", "margin:auto; text-align:center");





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


//function to accept the user's initials and score to save in the local storage

function UserInfo() {

}

//
startButton.addEventListener("click", startTimer);