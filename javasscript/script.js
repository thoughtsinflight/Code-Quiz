//-- Short Handing Elements
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start");
var questionEl = document.getElementById("question");
var btnOne = document.getElementById("btn1");
var btnTwo = document.getElementById("btn2");
var btnThree = document.getElementById("btn3");
var btnFour = document.getElementById("btn4");
var solutionEl= document.getElementById("rightwrong");
var startbtnEl = document.getElementById("startbtn");
var secondsLeft = 76;
// var questionIndex = questions[i]
// questions.forEach(function loop() {
// })
//--creating a state where the questions and the answer is hidden so they can be shown later.
questionEl.style.display = "none";
solutionEl.style.display = "none";

function showStart(){//-- shows the start menu
    startEl.style.display = "block";
}

function nextQuestion (){
    questionEl.style.display ="block"

    questions.forEach(function(){
        questionEl.innerHTML = "<h4>" + questions[1].title + "</h4>";
        btnOne.innerHTML = "<button>" + questions[1].choices[1] + "</button>"

    })

}


// Timer, it still needs to count down if the answer is wrong
function timer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {//--when time runs out reset to start
            clearInterval(timerInterval);
            questionEl.style.display = "none";
            showStart();
        }
    }, 1000)
}

// DELEGATION: this looks for a click on the Start button and; starts the timer and starts the loop of questions
startEl.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        nextQuestion();
        timer();
    }
    startEl.style.display = "none";
})