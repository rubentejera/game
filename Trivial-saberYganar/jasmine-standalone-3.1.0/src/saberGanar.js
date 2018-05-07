function start (){
    'use strict';

const questionsWithAnswers = [{
    id: 1,
    question: "¿Cuál es la capital de Portugal?",
    answers: [
        { id: 1, answer: "Faro", isCorrect: false, idQuestion: 1 },
        { id: 2, answer: "Oporto", isCorrect: false, idQuestion: 1 },
        { id: 3, answer: "Lisboa", isCorrect: true, idQuestion: 1 }
    ]
},
{
    id: 2,
    question: "¿Cuál es la capital de Egipto?",
    answers: [
        { id: 1, answer: "Faro", isCorrect: false, idQuestion: 2 },
        { id: 2, answer: "El Cairo", isCorrect: true, idQuestion: 2 },
        { id: 3, answer: "Lisboa", isCorrect: false, idQuestion: 2 }
    ]
},
{
    id: 3,
    question: "¿Cuál es la capital de España?",
    answers: [
        { id: 1, answer: "Madrid", isCorrect: true, idQuestion: 3 },
        { id: 2, answer: "Oporto", isCorrect: false, idQuestion: 3 },
        { id: 3, answer: "Lisboa", isCorrect: false, idQuestion: 3 }
    ]
},
{
    id: 4,
    question: "¿Cuál es la capital de Zambia?",
    answers: [
        { id: 1, answer: "Lusaka", isCorrect: true, idQuestion: 4 },
        { id: 2, answer: "Oporto", isCorrect: false, idQuestion: 4 },
        { id: 3, answer: "Lisboa", isCorrect: false, idQuestion: 4 }
    ]
},
{
    id: 5,
    question: "¿Cuál es la capital de Jordania?",
    answers: [
        { id: 1, answer: "Madrid", isCorrect: false, idQuestion: 5 },
        { id: 2, answer: "Amán", isCorrect: true, idQuestion: 5 },
        { id: 3, answer: "Lisboa", isCorrect: false, idQuestion: 5 }
    ]
},
{
    id: 6,
    question: "¿Cuál es la capital de Panama?",
    answers: [
        { id: 1, answer: "Madrid", isCorrect: false, idQuestion: 6 },
        { id: 2, answer: "Oporto", isCorrect: false, idQuestion: 6 },
        { id: 3, answer: "Ciudad de Panamá", isCorrect: true, idQuestion: 6 }
    ]
}];

const boxQuestions = document.querySelector('.questions');
const btn          = document.querySelector('.btn');

var i = 0;
function goingQuestions() {
    if(i < questionsWithAnswers.length){
        boxQuestions.innerHTML = questionsWithAnswers[i].question;
        for(let x = 0; x < questionsWithAnswers[i].answers.length; x++){
            boxQuestions.innerHTML += `<div><input type= checkbox>${questionsWithAnswers[i].answers[x].answer}</div>`;
        }
        i++;
    }
}
btn.addEventListener('click', goingQuestions);




} start();
