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


function displayQnA(question) {
    console.log(this);
    $(".question").text(this.question);
    $(".a").text(this.a);
    $(".b").text(this.b);
    $(".c").text(this.c);
    $(".d").text(this.d);
};
displayQnA(questions[1]);