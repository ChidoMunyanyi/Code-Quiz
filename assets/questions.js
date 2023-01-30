// Query Selectors//

let questions = document.querySelector("#questionsDiv");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choicesDiv");

let currentQuestion = 0;
let correctAnswer = " ";

//Questions Array//
let quizQs = [
    {
        question1: "What is JavasSript?",
        options: ["An indie band", "Who actually knows", "A programming language", "A pain in my ***"],
        answer: "A programming language"
    },
    {
        question2: "Who created JavaScript?",
        options: ["Nicholas Cage", "Brendan Eich", "Darth Vader", "Elliot Hunch"],
        answer: "Brendan Eich"
    },
    {
        question3: "What is JavaScript used for?",
        options: ["To create dynamic and interactive web content", "To structure a web page", "To induce delirium", "To communicate with other planets"],
        answers: "To create dynamic and interactive web content"
    },
    {
        question4: "What percentage of the world uses JavaScript?",
        options: ["30", "56", "100", "97"],
        answers: "97"
    }
]


