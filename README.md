# code-quiz
Purpose is to present the user with a 4 question quiz that tracks and scores each question that is answered within 60 seconds.  This is to help users who are students know how well they know fundamentals of JavaScript.

## Functionality
The user is greeted by a fun text with directions which will direct him/her/their to begin the quiz by pressing the start button.  

Upon hitting the start button, the timer will begin. The user will be presented with a question in large text with the answers to each questions presented below in the form of buttons.

To continue to the next question, the user will need to select an answer.

### Right Asnwer: 
If the question is answered correctly, the user will get a notice that lasts for 1 second stating, "Right Answer".  Then the user will earn a point in their score, which is tracked on-screen.  


### Wrong Answer: 
If the question is answered incorrectly, the user will get a notice that lasts for 1 second stating, "Wrong Answer".  The user will not get a point in their score, and 20 second will be deducted from the timer.

The user will then move on to the next question and the same process continues until the last question is answered.

## Timer
The timer is set to initiate as soon as the "Start" Button is submitted.  It will terminate under two conditions
1) the user finishes the quiz
2) when the clock reaches 0

## User Input
After the test has concluded, the user will see the final score and will be asked to enter his/her/their initials.  Once this information is submitted, the program will save both the score and initials in local storage where it will can be accessed using the "view high score" button.

## Clear High Score
The user may clear the local storage by clicking the "Clear High Score" Button.  This will clear out local storage.

## Start Over
At the end of the quiz, the user will be able to re-quiz by selecting the "Start Over" button, which will refresh the page while still maintaining the local storage, unless the "Clear High Score" button has been pushed.


## Credit:
MDN and the Activities in Module 04-Web-APIs were used as reference to build the code for this program.

The following website was used to get the content for the questions and answers used in this quiz. 
Credit:  Tutorialspoint website:  https://www.tutorialspoint.com/javascript/javascript_online_quiz.html
