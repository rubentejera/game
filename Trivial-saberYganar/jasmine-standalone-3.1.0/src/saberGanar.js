function start() {
    'use strict';

    const questionsWithAnswers = [{
        id: 1,
        question: "¿Cuál es la capital de Portugal?",
        answers: [
            { id: 0, answer: "Faro", isCorrect: false, idQuestion: 1 },
            { id: 1, answer: "Oporto", isCorrect: false, idQuestion: 1 },
            { id: 2, answer: "Lisboa", isCorrect: true, idQuestion: 1 }
        ]
    },
    {
        id: 2,
        question: "¿Cuál es la capital de Egipto?",
        answers: [
            { id: 0, answer: "Faro", isCorrect: false, idQuestion: 2 },
            { id: 1, answer: "El Cairo", isCorrect: true, idQuestion: 2 },
            { id: 2, answer: "Lisboa", isCorrect: false, idQuestion: 2 }
        ]
    },
    {
        id: 3,
        question: "¿Cuál es la capital de España?",
        answers: [
            { id: 0, answer: "Madrid", isCorrect: true, idQuestion: 3 },
            { id: 1, answer: "Oporto", isCorrect: false, idQuestion: 3 },
            { id: 2, answer: "Lisboa", isCorrect: false, idQuestion: 3 }
        ]
    },
    {
        id: 4,
        question: "¿Cuál es la capital de Zambia?",
        answers: [
            { id: 0, answer: "Lusaka", isCorrect: true, idQuestion: 4 },
            { id: 1, answer: "Oporto", isCorrect: false, idQuestion: 4 },
            { id: 2, answer: "Lisboa", isCorrect: false, idQuestion: 4 }
        ]
    },
    {
        id: 5,
        question: "¿Cuál es la capital de Jordania?",
        answers: [
            { id: 0, answer: "Madrid", isCorrect: false, idQuestion: 5 },
            { id: 1, answer: "Amán", isCorrect: true, idQuestion: 5 },
            { id: 2, answer: "Lisboa", isCorrect: false, idQuestion: 5 }
        ]
    },
    {
        id: 6,
        question: "¿Cuál es la capital de Panama?",
        answers: [
            { id: 0, answer: "Madrid", isCorrect: false, idQuestion: 6 },
            { id: 1, answer: "Oporto", isCorrect: false, idQuestion: 6 },
            { id: 2, answer: "Ciudad de Panamá", isCorrect: true, idQuestion: 6 }
        ]
    }];







const boxQuestions = document.querySelector('.questions');
const btn = document.querySelector('.btn');
const btnNext = document.querySelector('.btnNext');
let msg = document.querySelector('.message');

let sumPoints;
let seconds=0


//Sucesión de preguntas cada 20 segundos o cada vez que das al botón.
var i = 0;
function goingQuestions() {
    if (i < questionsWithAnswers.length) {
        boxQuestions.innerHTML = 
        `<div class="questionBox" id="${questionsWithAnswers[i].id}">${questionsWithAnswers[i].question}</div>`;
        for (let x = 0; x < questionsWithAnswers[i].answers.length; x++) {
            boxQuestions.innerHTML +=
                `<div class="checkboxBox">
        <input type="radio" id="${questionsWithAnswers[i].answers[x].id}" name="options" class="answer" value="${questionsWithAnswers[i].answers[x].answer}"/>
        <label for="${questionsWithAnswers[i].answers[x].id}">${questionsWithAnswers[i].answers[x].answer}</label>
        </div>`;
        }
        i++;
    msg.innerHTML = '';    
    }
}
btnNext.addEventListener('click', goingQuestions);
setInterval(goingQuestions, 20000)

let totalPoints = 0;
totalPoints=parseInt(totalPoints)

//Seleccionar respuesta
function readUserAnswer() { 
    const arrayRadioAnswers = document.querySelectorAll('.answer');
    for (var i = 0; i < arrayRadioAnswers.length; i++) {
        if (arrayRadioAnswers[i].checked) {
            var optionChecked = arrayRadioAnswers[i];
        }
    }
    var found = questionsWithAnswers.find(function(question) {
        var questionBox = document.querySelector('.questionBox');
        if (question.id == questionBox.id){
            return question
        }
    });     

    if (found.answers[optionChecked.id].isCorrect == true){
        console.log('BIEN')
        msg.innerHTML = `<h3> ¡Correcta! </h3>`
        totalPoints + 2;
    }
    else {
        console.log('MAL')
        msg.innerHTML = `<h3> ¡Incorrecta! </h3>`
        totalPoints - 2;
        
    }
    console.log(totalPoints)
}



btn.addEventListener('click', readUserAnswer);
// btn.addEventListener('click', goingQuestions)


// MARCADOR

// let score = {
// 	names:
// 	[],
// 	points:
// 	[]
// };


// const btnSave=document.querySelector('.btnSave');
// let scoreList=document.querySelector('.list');

// btnSave.addEventListener('click', scoreAndName);

// 	function scoreAndName () {
// 		const name= document.querySelector('#inputNameId').value;

// 		score.names.push(name);
// 		// console.log(score);
// 		let listNames= score.names;
// 		// console.log(listName);
// 		score.points.push(totalPoints);
// 		console.log(score);
// 		sumPoints= score.points;
// 		console.log(sumPoints);
// 		//Para que se guarden uno después de otro, se acumulen.
// 		let add ='';
// 		for (let i = 0;i < listNames.length; i++){
// 			add+= `<li>${listNames[i]} - ${sumPoints} puntos </li>`;
// 		};
// 		scoreList.innerHTML= add;
//     }


} start();