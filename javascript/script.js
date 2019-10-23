//-- Short Handing Elements
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start");
var questionEl = document.getElementById("question");
var solutionEl = document.getElementById("rightwrong");
var startbtnEl = document.getElementById("startbtn");
var submitBtnEl = document.getElementById("submitBtn");
var questArea = document.getElementById('questionArea');
var alldoneEL = document.getElementById("allDone");
var makeBtn = document.getElementById("makebtn");
var initialFinal = document.getElementById("initials");
var secondsLeft = 76;
var count = 0;
var timerInterval;

//--creating a state where the questions and the answer is hidden so they can be shown later.
questionEl.style.display = "none";
solutionEl.style.display = "none";
alldoneEL.style.display = "none";


function showStart() {//-- shows the start menu
    startEl.style.display = "block";
}

function nextQuestion() {//-- displays the next question in the object with a forEach loop
    questionEl.style.display = "block"
    var holderButton = ''
    questArea.innerHTML = questions[count].title
    questions[count].choices.forEach(function (choices, index) {
        holderButton += "<button value='" + choices + "' onClick='answerChecker(" + '"' + choices + '"' + ")' >" + index + '. ' + choices + "</button><br>"
    })
    makeBtn.innerHTML = holderButton
}

const answerChecker = (theyClicked) => {//-- checks to see what button was hit and if its the right answer are not
    if (theyClicked === questions[count].answer) {
        console.log('correct');
        solutionEl.textContent = "Correct!"
    }
    else {
        console.log('wrong')//-- decreases the timer if the selection was false
        secondsLeft -= 15
        solutionEl.textContent = "Wrong!"
    }
    if (count === questions.length - 1) {//
        clearInterval(timerInterval);
        console.log('fin your score = ' + secondsLeft)
        localStorage.setItem("currentScore", secondsLeft);
        questionEl.style.display = "none";
        alldoneEL.style.display = "block";
        Score();
    }
    else {
        count++
        nextQuestion()
    }
}

// Timer, it still needs to count down if the answer is wrong
function timer() {
    timerInterval = setInterval(function () {
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
    event.preventDefault();
    if (event.target.matches("button")) {
        nextQuestion();
        timer();
    }
    startEl.style.display = "none";
})

submitBtnEl.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("initials", initialFinal.value);
    window.location.replace("./highscore.html");
})


function Score() {
    var scoreFinal = localStorage.getItem("currentScore");
    document.getElementById("finalScore").textContent = "Your final score is: " + scoreFinal + "."
}

