const questions = [
    {
        question: "AFTER A FRUSTRATING DAY OF SHOE SHOPPING AT THE MALL, NICK SWINMURN FOUNDED THIS WEBSITE",
        a: "Ebay",
        b: "Amazon",
        c: "Adidas",
        d: "Zappos",
        answer: "Zappos",
        category: "Websites"
    },
    {
        question: "TAIPEI, IS THIS COUNTRY’S BIGGEST CITY",
        a: "Vietnam",
        b: "Cambodia",
        c: "Taiwan",
        d: "Japan",
        answer: "Taiwan",
        category: "Asian Geography"
    },
    {
        question: "LOCATED IN RHODE ISLAND, IT’S ALPHABETICALLY FIRST  AMONG IVY LEAGUE SCHOOLS",
        a: "Columbia University",
        b: "Brown University",
        c: "Dartmouth College",
        d: "Cornell University",
        answer: "Brown University",
        category: "Colleges & Universities"
    },
    {
        question: "MICHELANGELO’S “PIETA” FEATURES THESE 2 FIGURES",
        a: "Columbia University",
        b: "Brown University",
        c: "Dartmouth College",
        d: "Cornell University",
        answer: "Brown University"
    }

];

let time = 10;
let intervalId;
let questionNum = 0;
let correct = 0;
let wrong = 0;


var theme = document.getElementById("theme");
var audio = document.getElementById("audio");
var timesUp = document.getElementById("timesUp");
var correctDing = document.getElementById("correctDing");


theme.play();


$(".start").on("click", function () {
    startGame();

    $(".start").css("display", "none");
    $(".timer").css("display", "block");
    $(".gameContainer").css("display", "block");
    theme.src = "";
    audio.src = "";
});

$(".a").on("click", function () {
    //checkanswer
    checkAnswer(questions[questionNum], "a");
});
$(".b").on("click", function () {
    //checkanswer
    checkAnswer(questions[questionNum], "b");
});
$(".c").on("click", function () {
    //checkanswer
    checkAnswer(questions[questionNum], "c");
});
$(".d").on("click", function () {
    //checkanswer
    checkAnswer(questions[questionNum], "d");
});

//starts game: gets first question and starts the timer
function startGame() {
    questionNum = 0;
    runTimer();
    getNewQ();

};


function getNewQ() {
    console.log(questionNum);
    if (questionNum < questions.length) {
        displayQnA(questions[questionNum]);

    }
    else {
        setTimeout(function () { displayResults() }, 5000);
        stopTimer();

    }
};

function displayQnA(obj) {

    console.log(obj);
    $(".question").text(obj.question);
    $(".a").text(obj.a);
    $(".b").text(obj.b);
    $(".c").text(obj.c);
    $(".d").text(obj.d);

};

function displayCorrectAnswer(obj, input) {

    //Hide questions and choices
    $(".question").css("display", "none");
    $(".options").children().css("display", "none");
    $(".timer").css("display", "none");

    $(".status").text(input);
    $(".answer").text(obj.answer);


    //display answer 

    $(".correctAnswer").children().css("display", "block");


    setTimeout(function () {
        console.log(questionNum);
        $(".correctAnswer").children().css("display", "none");
        if (questionNum < questions.length) {
            $(".question").css("display", "block");
            $(".options").children().css("display", "block");
            $(".timer").css("display", "block");
            $(".correctAnswer").children().css("display", "none");
            resetTimer();
        }
    }, 5000);


    //wait 5 seconds then display new question

};

function displayResults() {

    //Hide questions and choices
    $(".question").css("display", "none");
    $(".options").children().css("display", "none");
    $(".timer").css("display", "none");

    //set values
    $(".correct").text("Correct answers: " + correct);
    $(".wrong").text("wrong answers: " + wrong);

    //display results
    $(".results").children().css("display", "block");

};

function checkAnswer(obj, guess) {

    console.log(obj[guess]);
    if (obj[guess] === obj.answer) {
        console.log("correct");
        correct++;
        displayCorrectAnswer(obj, "Correct!");
        correctDing.play();
        //increment correct
        //show right guess screen for 5 seconds
    }
    else {
        console.log("wrong");
        wrong++;
        displayCorrectAnswer(obj, "Wrong");
        //increment wrong
        //show wrong guess screen for 5 seconds
    }

    if (questionNum <= questions.length) {
        questionNum++;
        nextQuestion();
    }
};

function nextQuestion() {
    getNewQ();
    stopTimer();
    resetTimer();
};

//timer functions
function runTimer() {
    if (time > 0) {
        intervalId = setInterval(decrementTimer, 1000);
    }
};

function decrementTimer() {
    time--;
    $(".timer").text("Time left " + time);

    if (time <= 5) {
        $(".timer").css("color", "#E03A3E");
    }

    if (time === 0) {
        stopTimer();

        if (questionNum < questions.length) {
            timesUp.play();
            displayCorrectAnswer(questions[questionNum], "Time is up!");
            questionNum++;
            nextQuestion();

        }

    }
};

function stopTimer() {
    clearInterval(intervalId);
};

function resetTimer() {
    clearInterval(intervalId);
    time = 10;
    runTimer();
    $(".timer").css("color", "#dddddd");
};
