
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
function startTimer(event) {
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
    event.preventDefault
    presentQuestion();
}

//set up questions and answers under a single array called quizQuestions.  Inside create an array with the questions set which includes 1. the question, 2. the answer choices, and 3. the correct Answer.


quizQuestions = [
    {
        question: "Is JavaScript a case-sensitive language?",
        choices: ["Yes", "No", "Not always", "Only when running HTML"],
        correctAnswer: "Yes",
    },
    {
        question: "Which of the following functions returns a string value to uppoercase?",
        choices: ["toLocateUpperCase()", "toUpperCase()", "toString()", "ubstring()"],
        correctAnswer: "toUpperCase()",
    },
    {
        question: "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
        choices: ["sup()", "small()", "strike()", "sub()"],
        correctAnswer: "sub()",
    },
    {
        question: "Which of the following function of Array object reverses the order of the elements of an array?",
        choices: ["reverse()", "push()", "reduce()", "reduceRight()"],
        correctAnswer: "reverse()",
    },
]
//create a function that will insert the value of each question set into the html page.  For the answers, create buttons for them and insert the answer text inside the corresponding button.

function presentQuestion(){
    questionCycle = 0;
 console.log(questionCycle);
 for(let i=0; i<quizQuestions.length; i++); {
     question.textContent = quizQuestions[i].question;
 }
   
    for (let i = 0; i < quizQuestions[0].choices.length; i++) {
  
   
        var choicebutton = document.createElement("button");
        choicebutton.setAttribute("id", "choicebutton"+[i])
        // choicebutton.setAttribute("value", quizQuestions[0].choices[i]);
        choicebutton.textContent = quizQuestions[questionCycle].choices[i];
        answerList.appendChild(choicebutton);

        //as the program cycles through presenting the question, call the function "checkAnswer"

    }

    var choice0 = document.querySelector("#choicebutton0");
    var choice1 = document.querySelector("#choicebutton1");
    var choice2 = document.querySelector("#choicebutton2");
    var choice3 = document.querySelector("#choicebutton3");
    choice0.addEventListener("click", function(){
        if(choice0.textContent== quizQuestions[0].correctAnswer){
            alert("Great job");
        } else{
            alert("sorry");
        }
        questionCycle = questionCycle + 1;
        presentQuestion();
        console.log(questionCycle);
    });
    choice1.addEventListener("click", function(){
        if(choice1.textContent == quizQuestions[0].correctAnswer){
            alert("Great job");
        } else{
            alert("sorry");
        }
    });
    choice2.addEventListener("click", function(){
        if(choice2.textContent== quizQuestions[0].correctAnswer){
            alert("Great job");
        } else{
            alert("sorry");
        }
        // questionCycle++
        presentQuestion();
    });
    choice3.addEventListener("click", function(){
        if(choice3.textContent== quizQuestions[0].correctAnswer){
            alert("Great job");
        } else{
            alert("sorry");
        }
        // questionCycle++
        presentQuestion();
    });
 
  


}




//add a variable called "CorrectAnswer" that declares the correct answer
//add event listener "click" that marks the user's entry
// write if statement to check if the user entry matches "CorrectAnswer1" to execute the follow:  IF TRUE: increase score by 1, advance to presentQuestion2().  IF FALSE: no action on the score, reduce the time by 20 seconds, move on to presentQuestion2().
// function presentQuestion(0)





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