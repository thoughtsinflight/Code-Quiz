//-- Short Handing Element
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start");
var questionEl = document.getElementById("question");
var solutionEl= document.getElementById("rightwrong");
var startbtnEl = document.getElementById("startbtn");
var secondsLeft = 76;
// var questionIndex = questions[i]
// questions.forEach(function loop() {
// })
questionEl.style.display = "none"
solutionEl.style.display = "none"
function nextquestion (){

}


// Timer, it still needs to count down if the answer is wrong
function timer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //--- enter a function that hides all elements and shows the Start screen
        }
    }, 1000)
}

// this looks for a click on the Start button and; starts the timer and starts the loop of questions
startEl.addEventListener("click", function (event) {
    alert("yo!")
    if (event.target.matches("button")) {
        // loop();
        timer();
    }
    startEl.style.display = "none";
})