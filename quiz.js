const question = document.getElementById("question");
const answerChoices = Array.from(document.getElementsByClassName("answerText"));
const questionCountText = document.getElementById("questionCount")
const scoreText = document.getElementById("score")

let currentQuestion = {};
let chooseQuestion = [];
let totalScore = 0;
let timer = 40;
let questionCount = 0;
let chooseAnswers = false;

let questions = [
    {
        question: "Which HTML element defines a line break?",
        choice1: "<div>",
        choice2: "<id>",
        choice3: "<p>",
        choice4: "<br>",
        answer: 4

    },
    {
        question: "Which HTML header has the biggest text? ",
        choice1: "h1",
        choice2: "h2",
        choice3: "h3",
        choice4: "h4",
        answer: 1

    },
    {
        question: "Which is NOT a semantic element?",
        choice1: "<article>",
        choice2: "<div>",
        choice3: "<section>",
        choice4: "<nav>",
        answer: 2
    },
    {
        question: "Where do we link images?",
        choice1: ".html",
        choice2: ".css",
        choice3: ".js",
        choice4: ".gif",
        answer: 1

    },
    {
        question: "Which symbol connects id to CSS?",
        choice1: "*",
        choice2: "$",
        choice3: ".",
        choice4: "#",
        answer: 4

    },
    {
        question: "What language are web developers NOT required to learn?",
        choice1: "Java",
        choice2: "Python",
        choice3: "CSS",
        choice4: "HTML",
        answer: 1

    },
    {
        question: "What are variables used for in JavaScript Programs?",
        choice1: "Storing numbers, dates, or other values?",
        choice2: "Varying randomly",
        choice3: "Causing high-school algebra flashbacks",
        choice4: "None of the above",
        answer: 1

    },
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        choice1: "<script>",
        choice2: "<body>",
        choice3: "<head>",
        choice4: "<title>",
        answer: 1

    },
    {
        question: "What does CSS stand for?",
        choice1: "Cascading Style Sheets",
        choice2: "Colorful Style Sheets",
        choice3: "Creative Style Sheets",
        choice4: "Computer Style Sheets",
        answer: 1

    }
    , {
        question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
        choice1: "margin",
        choice2: "clear",
        choice3: "float",
        choice4: "padding",
        answer: 2

    },
    {
        question: "If we want to wrap a block of text around an image, which css property will we use ?",
        choice1: "wrap",
        choice2: "push",
        choice3: "float",
        choice4: "allign",
        answer: 3

    },
    {
        question: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
        choice1: "border-color",
        choice2: "border-decoration",
        choice3: "border-style",
        choice4: "border-line",
        answer: 3

    },
    {
        question: "Which of the following properties will we use to display border around a cell without any content ?",
        choice1: "empty-cell",
        choice2: "blank-cell",
        choice3: "noncontent-cell",
        choice4: "void-cell",
        answer: 1

    },
    {
        question: "When we write <img src=img.png>, what img.png inside double quote implies?",
        choice1: "element",
        choice2: "attribute",
        choice3: "value",
        choice4: "operator",
        answer: 3

    },

];

const correctBonus = 5;
const wrongPenalty = -1;
const totalQuestionsText = 6;
const totalQuestions = 6;

function startQuiz() {
    totalScore = 0;
    questionCount = 0;
    timer = 40;
    chooseQuestion = [...questions]
    console.log(chooseQuestion);
    newQuestion();

};

function newQuestion() {
    if (chooseQuestion.length === 8) {
        localStorage.setItem('currentscore', JSON.stringify(totalScore));
        return window.location.replace("end.html")
    }
    questionCount++;
    questionCountText.innerText = questionCount + "/" + totalQuestions;


    const questionNote = Math.floor(Math.random() * chooseQuestion.length);
    currentQuestion = chooseQuestion[questionNote];
    question.innerText = currentQuestion.question;

    answerChoices.forEach((choice) => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];

    });
    chooseQuestion.splice(questionNote, 1);
    chooseAnswers = true;
};

answerChoices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
        if (!chooseAnswers) return;

        chooseAnswers = false;
        const selectedChoice = e.target;
        const textSelected = selectedChoice.dataset["number"];

        const classApply =
            textSelected == currentQuestion.answer ? "correct" : "incorrect"

        if (classApply === "correct") {
            updatedScore(correctBonus);
            if (classApply === "false");
                updatedScore(wrongPenalty);

        }

        selectedChoice.parentElement.classList.add(classApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classApply);
            newQuestion()
        }, 1000);


    });


});

updatedScore = num => {
    totalScore += num;
    scoreText.innerText = totalScore;
}
console.log(totalScore)

startQuiz();
