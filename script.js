const questions = {
    {
        question; "Qual o planeta mais proximo do Sol?",
        answers; [
            { id: 1, text:"Vênus", correct: false},
            { id: 2, text:"Terra", correct: false},
            { id: 3, text:"Mercúrio", correct: true},
            { id: 4, text:"Marte", correct: false},
        ],
    },
    {
        question; "Quaem pintou Mona Lisa?",
        answers; [
            { id: 1, text:"Leonardo da Vinci", correct: true},
            { id: 2, text:"Vincent Van Gogh", correct: false},
            { id: 3, text:"Pablo Picasso", correct: false},
            { id: 4, text:"Claude Monet", correct: false},
        ],
    },
    {
        question; "Qual o menor país do mundo?",
        answers; [
            { id: 1, text:"Nepal", correct: false},
            { id: 2, text:"Butão", correct: false},
            { id: 3, text:"Japão", correct: false},
            { id: 4, text:"Vaticano", correct: true},
        ],
    },
    {
        question; "Qual a capital do Brasil?",
        answers; [
            { id: 1, text:"Rio de aneiro", correct: false},
            { id: 2, text:"Brasília", correct: true},
            { id: 3, text:"São Paulo", correct: false},
            { id: 4, text:"Salvador", correct: false},
        ],
    },
}

const questionElement = document.getElementById("question");
const answersButtons = document.getElementById("answe-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let socre = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

