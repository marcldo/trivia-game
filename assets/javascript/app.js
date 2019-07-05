const questions = [
    {
        question: "What color is the sky?",
        a: "red",
        b: "green",
        c: "blue",
        d: "yellow",
        answer: "blue"
    },
    {
        question: "What color is the grass?",
        a: "red",
        b: "green",
        c: "blue",
        d: "yellow",
        answer: "green"
    },
    {
        question: "What color the sun?",
        a: "red",
        b: "green",
        c: "blue",
        d: "yellow",
        answer: "yellow"
    }

];

let time = 10;
let intervalId;
let questionNum = 0;
let correct = null;
let wrong = null;

$(".start").on("click", function () {
    startGame();
    $(".start").css("display", "none");
    $(".timer").css("display", "block");
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


function startGame() {
    questionNum = 0;
    getNewQ();
    runTimer();
};

function getNewQ() {
    if (questionNum < questions.length) {
        displayQnA(questions[questionNum]);

        console.log(questionNum);
    }
    else {
        displayResults();
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
        //increment correct
        //show right guess screen for 5 seconds
    }
    else {
        console.log("wrong");
        wrong++;
        //increment wrong
        //show wrong guess screen for 5 seconds
    }
    questionNum++;
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

    if (time === 0) {
        getNewQ();
        stopTimer();
        resetTimer();
    }
};

function stopTimer() {
    clearInterval(intervalId);
};

function resetTimer() {
    time = 10;
    runTimer();
};
