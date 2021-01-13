
var timerCount;
var timerElement = document.querySelector(".timer-count");
var score = document.querySelector(".score");
var startButton = document.querySelector("#start-button");

timerCount = 120;
//set up timer process
function startTimer() {
    // Sets timer
    var timer = setInterval(function () {
        timerCount--;
        timerElement.innerText = timerCount;
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

//
startButton.addEventListener("click", startTimer);