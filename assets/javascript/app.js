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

$(".start").on("click", function () {
    startGame();
    $(".start").css("display", "none");
    $(".timer").css("display", "block");
});


function startGame() {
    questionNum = 0;
    getNewQ();
    runTimer();
};

function getNewQ() {
    if (questionNum < questions.length) {
        displayQnA(questions[questionNum]);
        questionNum++;
        console.log(questionNum);
    }
    else {
        startGame();
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
}
